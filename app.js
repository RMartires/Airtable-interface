var Airtable = require('airtable');
//var AIRTABLE_API_KEY = 'key8Bk3Ff1GoNBJDv';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'key6g32DRULc2ELR4'
});

var base = Airtable.base('test');


base('Table 1').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 2,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
