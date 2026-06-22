/**
 * Nishant Kirtan – Landing Page Leads
 * Paste this into Extensions → Apps Script on the Google Sheet named "Landing Page Leads".
 * Then Deploy → New deployment → Web app → Execute as: Me, Who has access: Anyone.
 * Copy the resulting Web app URL and put it in script.js (SHEET_ENDPOINT).
 */

var SHEET_NAME = 'Leads'; // tab name inside the spreadsheet

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    var data = JSON.parse(e.postData.contents);

    var headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'City',
      'Where do you want to organize the Kirtan?',
      'When are you planning the Kirtan?',
      'What is the occasion?',
      'How many people will attend?',
      'What type of Kirtan are you looking for?',
      'Select the package you are interested in',
      'Are you ready to discuss and confirm booking?',
      'Preferred date and specific requirements'
    ];

    // Write header row once
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }

    // Force the Phone column (column 4) to plain text so "+91..." isn't read as a formula
    sheet.getRange(1, 4, sheet.getMaxRows(), 1).setNumberFormat('@');

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.city || '',
      data.where_do_you_want_to_organize_the_kirtan || '',
      data.when_are_you_planning_the_kirtan || '',
      data.what_is_the_occasion || '',
      data.how_many_people_will_attend || '',
      data.what_type_of_kirtan_are_you_looking_for || '',
      data.select_the_package_you_are_interested_in || '',
      data.are_you_ready_to_discuss_and_confirm_booking || '',
      data.please_share_your_preferred_date_and_specific_requirements || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
