/**
 * =========================================================================
 * EFICIAN // BACKEND SERVERLESS GRATUITO PARA GOOGLE SHEETS
 * =========================================================================
 * 
 * INSTRUCCIONES DE INSTALACIÓN (En menos de 3 minutos):
 * 
 * 1. Ve a Google Drive (drive.google.com) y crea una nueva "Hoja de cálculo de Google"
 *    llamada: "EFICIAN - Base de Datos Leads & Precios"
 * 
 * 2. En la hoja de cálculo, renombra la primera pestaña como: "Leads"
 *    Y crea una segunda pestaña llamada: "Config_Precios"
 * 
 *    En la pestaña "Leads", escribe estos encabezados en la Fila 1:
 *    [A1: Fecha] [B1: Nombre] [C1: Email] [D1: Teléfono] [E1: Tipo] [F1: Comuna] [G1: Consumo kWh] [H1: Kit Sugerido] [I1: Estado]
 * 
 *    En la pestaña "Config_Precios", escribe estos encabezados en la Fila 1:
 *    [A1: Kit_ID] [B1: Nombre] [C1: Precio_CLP] [D1: Potencia] [E1: Ultima_Actualizacion]
 * 
 * 3. En el menú superior de la hoja, haz clic en: Extensiones > Apps Script
 * 4. Borra todo el código que aparezca y pega este archivo completo.
 * 5. Haz clic en "Implementar" (botón azul arriba a la derecha) > "Nueva implementación".
 * 6. Tipo: "Aplicación web".
 *    - Descripción: "Webhook Efician"
 *    - Ejecutar como: "Yo" (tu cuenta)
 *    - Quién tiene acceso: "Cualquier usuario" (Anyone) -> ¡Importante para que la web pueda enviar datos!
 * 7. Haz clic en "Implementar", autoriza los permisos de tu cuenta y COPIA la "URL de la aplicación web".
 * 8. Pega esa URL en el "Modo Dueño" de la web de Efician (Pestaña: Sincronización).
 * =========================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheetApp = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    
    // CASO 1: Registrar nuevo prospecto (Lead)
    if (data.action === "new_lead") {
      var leadsSheet = sheetApp.getSheetByName("Leads") || sheetApp.insertSheet("Leads");
      
      // Si la fila 1 está vacía, agregar encabezados
      if (leadsSheet.getLastRow() === 0) {
        leadsSheet.appendRow([
          "Fecha", "Nombre", "Email", "Teléfono", "Tipo", "Comuna", "Consumo kWh", "Kit Sugerido", "Estado"
        ]);
      }
      
      leadsSheet.appendRow([
        data.timestamp || new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" }),
        data.name || "",
        data.email || "",
        data.phone || "",
        data.clientType || "domicilio",
        data.commune || "Coyhaique",
        data.kwh || 380,
        data.recommendedKit || "kit-5-5",
        data.status || "Nuevo"
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Lead registrado con éxito" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // CASO 2: Actualizar precios de kits desde el Modo Dueño
    if (data.action === "update_pricing") {
      var pricesSheet = sheetApp.getSheetByName("Config_Precios") || sheetApp.insertSheet("Config_Precios");
      
      // Limpiar y reescribir
      pricesSheet.clearContents();
      pricesSheet.appendRow(["Kit_ID", "Nombre", "Precio_CLP", "Potencia", "Ultima_Actualizacion"]);
      
      var now = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });
      var kits = data.kits || {};
      
      for (var kitId in kits) {
        if (kits.hasOwnProperty(kitId)) {
          pricesSheet.appendRow([
            kitId,
            kits[kitId].name || kitId,
            kits[kitId].price || 0,
            kits[kitId].power || "",
            now
          ]);
        }
      }
      
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Precios actualizados en Google Sheets" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // CASO 3: Actualizar estado de un prospecto
    if (data.action === "update_lead_status") {
      var sheet = sheetApp.getSheetByName("Leads");
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        for (var i = 1; i < rows.length; i++) {
          if (rows[i][2] === data.email && rows[i][1] === data.name) {
            sheet.getRange(i + 1, 9).setValue(data.status); // Columna I: Estado
            break;
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Estado actualizado" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "ignored", message: "Acción no reconocida" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  try {
    var sheetApp = SpreadsheetApp.getActiveSpreadsheet();
    var action = e.parameter.action;
    
    // Obtener precios vigentes
    if (action === "get_pricing") {
      var pricesSheet = sheetApp.getSheetByName("Config_Precios");
      var prices = {};
      if (pricesSheet && pricesSheet.getLastRow() > 1) {
        var rows = pricesSheet.getDataRange().getValues();
        for (var i = 1; i < rows.length; i++) {
          var kitId = rows[i][0];
          if (kitId) {
            prices[kitId] = {
              name: rows[i][1],
              price: Number(rows[i][2]),
              power: rows[i][3]
            };
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify({ status: "success", prices: prices }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Obtener últimos leads (para sincronizar con el panel del dueño)
    var leadsSheet = sheetApp.getSheetByName("Leads");
    var leads = [];
    if (leadsSheet && leadsSheet.getLastRow() > 1) {
      var rows = leadsSheet.getDataRange().getValues();
      for (var j = 1; j < rows.length; j++) {
        leads.push({
          timestamp: rows[j][0],
          name: rows[j][1],
          email: rows[j][2],
          phone: rows[j][3],
          clientType: rows[j][4],
          commune: rows[j][5],
          kwh: rows[j][6],
          recommendedKit: rows[j][7],
          status: rows[j][8] || "Nuevo"
        });
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", leads: leads }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
