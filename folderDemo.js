
const fs = require("fs");

// check if a folder exists.
let dataExists = fs.existsSync(`${process.cwd()}/Data`);
console.log(process.cwd());

console.log(dataExists);

// create a folder.

fs.mkdirSync(`${process.cwd()}/screenshots`, { recursive: true });  // recursive: true ,  skips creation if the folder already exists:


// Delete folder


 if(fs.existsSync(`${process.cwd()}/screenshots`)){
    fs.rmdirSync(`${process.cwd()}/screenshots`)
}
