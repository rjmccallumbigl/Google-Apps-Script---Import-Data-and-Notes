/****************************************************************************************************************************************
*
* Import range and notes.
*
****************************************************************************************************************************************/

function importRangeAndNotes() {
    // Declare variables
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  //replace with your source sheet's URL
  var sourceSheetURL = "https://docs.google.com/spreadsheets/d/1RISGQDUrtUHlJz2fx098dhy0uLZgMvs-YF_60myaHnI/edit#gid=0"; 
  var sourceSheet = SpreadsheetApp.openByUrl(sourceSheetURL);
  
//  Get values and notes from source sheet
  var sourceSheetRange = sourceSheet.getDataRange();
  var sourceSheetRangeValues = sourceSheetRange.getValues();
  var sourceSheetNotes = sourceSheetRange.getNotes();
  
//  Import to current sheet
  sheet.clear();
  sheet.getRange(1, 1, sourceSheetRangeValues.length, sourceSheetRangeValues[0].length).setValues(sourceSheetRangeValues).setNotes(sourceSheetNotes);
}
