#!/usr/bin/env node
var fs = require("fs");

console.log("Reading value of pin gpio4...");

fs.readFile('/sys/class/gpio/gpio4/value', 'utf8', (err, contents) => {
    if(err) {
        console.log("Error: ", err);
    }
    console.log("Value: ", contents);
});

console.log("Reading complete.");