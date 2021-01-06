const excelToJson = require("./excelToJson")



const excelFileAgr = { excelFileName: "/home/dell/Downloads/Customer_master (1) (2).xlsx",
sheetName: "Sheet1",
writtenFileName: "student2.json",
javaObj1: "Sheet1"
}

excelToJson.CovertdataJson(excelFileAgr)
