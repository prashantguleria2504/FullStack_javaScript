"use Strict"

// read a JSON file

const data = require("./Data/placeOrderTestData.json")


//console.log(data);

console.log(JSON.stringify(data));

// Process

console.log(process.cwd());  // where the node command is passed. current root dir.
console.log(__dirname);  // file path where it is currently sitting.


// Getting a file path for sample json.

console.log(`${process.cwd()}/Data/placeOrderTestData.json`);  // returns the full path of the file.
