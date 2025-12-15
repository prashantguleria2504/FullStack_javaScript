
const excelJs = require("exceljs");


async function WriteIntoExcel(searchTxt, ReplaceTxt, change) {

     const Exceljs = require("exceljs");

    const workBook = new Exceljs.Workbook();
    await workBook.xlsx.readFile("C:/Users/004438744/Desktop/IBM/FullStack_Testing_Training/SDET_Series/JavaScript/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/RS_download.xlsx")

    const workSheet = workBook.getWorksheet("Sheet1");

    const output = await readExcel(workSheet, searchTxt);

    let cell = workSheet.getCell(output.targetRow,output.targetCol+change.colChange);
    cell.value = ReplaceTxt;
    await workBook.xlsx.writeFile("C:/Users/004438744/Desktop/IBM/FullStack_Testing_Training/SDET_Series/JavaScript/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/RS_download_Mod.xlsx")

}

WriteIntoExcel("Banana", "100", {"rowchage" : 0 , "colChange" : 2});



async function readExcel(workSheet, searchTxt) {

    const output = {targetRow : 0 , targetCol : 0};

        workSheet.eachRow((row,rowNumber) => {

        row.eachCell((cell, colNum) => {

            if(cell.value === searchTxt) {
                console.log("Cell number : " + colNum);
                console.log("row number : " + rowNumber);
                output.targetRow = rowNumber;
                output.targetCol = colNum;
                
            }  
    })
})

return output;
}


