// https://www.npmjs.com/package/exceljs
// Install exceljs dependency in ur project.
// 1. create a folder and in that create npm project : npm init  -- this will create package.json file.
// 2. install excel dependency: npm install exceljs --savedev -- creates dependency as well as entry in dependency file.

// Import the dependency in ur file. Basically wer importing a class from package.

// METHOD 1

const ExcelJs = require("exceljs");

// create object of the imported class (ExcelJs) so as to access Workbook methods in that.

const workBook = new ExcelJs.Workbook();  

workBook.xlsx.readFile("C:/Users/004438744/Desktop/IBM/Full Stack Testing Training/SDET Series/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/ExcelTest.xlsx")
.then(() => {

    const workSheet = workBook.getWorksheet("Sheet1");

    workSheet.eachRow((row,rowNum) => {

        row.eachCell((cell,colNum) => {
        console.log(cell.value);
        
    })

})


})

// METHOD 2

// OR we can add AWAIT instead of .then(), but need to define entire code in a function with async keyword.

//await workBook.xlsx.readFile("C:/Users/004438744/Desktop/IBM/Full Stack Testing Training/SDET Series/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/ExcelTest.xlsx")
// next step


async function ReadDataFromExcel(searchText,newValue,change,FilePath) {

     const ExcelJs = require("exceljs");
    const workBook = new ExcelJs.Workbook(); 

    await workBook.xlsx.readFile(FilePath)
    const workSheet = workBook.getWorksheet("Sheet1");

    const [FinalRowNum,FinalColNum] = await readExcel(workSheet,searchText);

    const cell = workSheet.getCell(FinalRowNum,FinalColNum+change.ColChange);    
    cell.value = newValue;
    await workBook.xlsx.writeFile(FilePath);

}


ReadDataFromExcel("banana", 100,{rowChnage:0,ColChange:2},"C:/Users/004438744/Desktop/IBM/Full Stack Testing Training/SDET Series/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/ExcelTest.xlsx");


async function readExcel(workSheet,searchText) {

     let FinalRowNum;
     let FinalColNum;

    //let output = [FinalRowNum,FinalColNum];

    workSheet.eachRow((row,rowNum) => {

        row.eachCell((cell,colNum) => {
                
            if(cell.value === searchText) {

                FinalRowNum = rowNum;
                FinalColNum = colNum;

               // console.log("Col number is : " + colNum);
               // console.log("Row number is : " + rowNum);
                console.log("Cell valus is : " + cell.value);            
                             
            }
        })

    })
    return [FinalRowNum,FinalColNum];
    
}