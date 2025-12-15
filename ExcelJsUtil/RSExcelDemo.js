
// async function readExcel() {

//         const Exceljs = require("exceljs");

//     const workBook = new Exceljs.Workbook();
//     await workBook.xlsx.readFile("C:/Users/004438744/Desktop/IBM/FullStack_Testing_Training/SDET_Series/JavaScript/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/RS_download.xlsx")

//     const workSheet = workBook.getWorksheet("Sheet1");

//     workSheet.eachRow((row,rowNumber) => {

//         row.eachCell((cell, colNum) => {

//             console.log(cell.value);
        
//     })
// })

// }`
// readExcel()


async function getCellNum() {

        const Exceljs = require("exceljs");

    const workBook = new Exceljs.Workbook();
    await workBook.xlsx.readFile("C:/Users/004438744/Desktop/IBM/FullStack_Testing_Training/SDET_Series/JavaScript/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/RS_download.xlsx")

    const workSheet = workBook.getWorksheet("Sheet1");

    let targetRow;
    let targetCol;

    workSheet.eachRow((row,rowNumber) => {

        row.eachCell((cell, colNum) => {

            if(cell.value === "Banana") {
                console.log("Cell number : " + colNum);
                console.log("row number : " + rowNumber);
                targetRow = rowNumber;
                targetCol = colNum;
                
            }
        
    })
})

    let cell = workSheet.getCell(targetRow,targetCol);
    cell.value = "Samsung";
    await workBook.xlsx.writeFile("C:/Users/004438744/Desktop/IBM/FullStack_Testing_Training/SDET_Series/JavaScript/JavaScript_NaveenAutomation/JS_WorkSpace/ExcelJsUtil/ExcelFile/RS_download_Mod.xlsx")

}
getCellNum()
