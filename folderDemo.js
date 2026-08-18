
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

// read file.

let filePath = `${process.cwd()}/Data/placeOrderTestData.json`;
let fileData = fs.readFileSync(filePath , "utf-8")
console.log(fileData);


// Write to file

let err = {
    testid : "TC123",
    error : "App failed to launch"
};

fs.writeFileSync(`${process.cwd()}/Data/err.json` , JSON.stringify(err,undefined,4))


// Delete a file

fs.unlinkSync(`${process.cwd()}/Data/err.json`)


// Console output to a file.

// in terminal type the command , followed by > and then folder name.

// eg:    node folderDemo.js > output.txt    -- this will create the file in the root dir.
