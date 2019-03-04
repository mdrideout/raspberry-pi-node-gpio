#!/usr/bin/env node
var fs = require("fs");

// Empty function for non-callbacks
function noop() {}

console.log("Reading / writing state of pin gpio4...");

if(typeof process.argv[2] === "undefined" || (process.argv[2] !== 'on' && process.argv[2] !== 'off')) {
    console.log("Indicate 'on' or 'off' as an argument.");
}

// Perform reads
fs.readFile('/sys/class/gpio/gpio4/value', 'utf8', (err, contents) => {
    if(err) {
        console.log("Error: ", err);
    }
    console.log("Initial Value: ", contents);
});

fs.readFile('/sys/class/gpio/gpio4/direction', 'utf8', (err, contents) => {
    if(err) {
        console.log("Error: ", err);
    }
    console.log("Initial Direction: ", contents);
});

if(process.argv[2] === "on") {
    // Perform Writes
    fs.writeFile('/sys/class/gpio/gpio4/direction', 'out', (err) => { 
        if(err) {
            console.log("Error: ", err);
        }
        console.log("Wrote direction out.");
    });
    fs.writeFile('/sys/class/gpio/gpio4/value', '0', (err) => { 
        if(err) {
            console.log("Error: ", err);
        }
        console.log("Wrote value 0.");
    });
}

if(process.argv[2] === "off") {
    // Perform Writes
    fs.writeFile('/sys/class/gpio/gpio4/direction', 'out', (err) => { 
        if(err) {
            console.log("Error: ", err);
        }
        console.log("Wrote direction out.");
    });
    fs.writeFile('/sys/class/gpio/gpio4/value', '1', (err) => {
        if(err) {
            console.log("Error: ", err);
        }
        console.log("Wrote value 1.");
    });
}

console.log("Reading / writing complete.");