#!/usr/bin/env node
var fs = require('fs');

let date = Date.now();

fs.writeFile("testFile.txt", `Test File Content. Date: ${date}`, (err) => {
    if (err) throw err;

    console.log("File successfully saved.");
})