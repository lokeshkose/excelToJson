const fs = require('fs');
const excelToJson = require("convert-excel-to-json")

// convert data excel to Json
const covertdataJson = (x) => {
    const javaObj = excelToJson({
        sourceFile: x.excelFileName,
        sheets: [
            {
                name: x.sheetName,
                //columnToKey: {}

            }
        ]
        // sheets:[{
        //     name: sheetName,
        //     // columnToKey: {
        //     //     A: 'id',
        //     //     B: 'ProductName'
        //     // }
        // }]
    })
    const arrayData = javaObj.Sheet1
    const jsonData = JSON.stringify(arrayData)
    fs.writeFileSync(x.writtenFileName, jsonData)
    return jsonData
}

// read Json file
const readJsonFile = (jsonFileName) => {
    if (jsonFileName) {
        const bufferData = fs.readFileSync(jsonFileName);
        const stringData = bufferData.toString();
        const dataJavaObj = JSON.parse(stringData);
        const dataJson = JSON.stringify(dataJavaObj)
        
    }
}

// lopping&Writing

const looping = (array) => {
    array.forEach(element => {
        //    const product = {
        //     name : element.Q,
        //     company: element.A,
        //     brand: element.G,
        //     price : 0,
        //     categoryId : element.F,
        //     parentCategoryId : element.E,
        //     productCode : element.P,
        //     productType: element.N,
        //     topSelling:element.O,
        //     priceType : "Standard Price",
        //     packType : element.H,
        //     packQtyInCase: element.J,
        //     currentCaseSize: element.I,
        //     productSysCode : element.B,
        //     productStatus: element.L,
        //     npd:element.M,
        //     lastUpdatedAt : 1608908761846,
        //     tkPoint : 0,
        //     sequenceId : 0,
        //     netWeight : element.K,
        //     inventoryDetails : []
        //  }

        //     const customer = {
        //             name : element.B,
        //             userLoginId:element.P,
        //             password : "sb@123",
        //             userType : "CUSTOMER",
        //             country : "ZAMBIA",
        //             channel : element.J,
        //             province : element.H,
        //             externalId : 0,
        //             lastUpdatedAt : 1608914400899,
        //             parentId : "",
        //             associatedSalesmanList : [element.L],
        //             tkCurrency : 0,
        //             tkPoints : null,
        //             customerCode:element.A,
        //             headCode:element.C,
        //             headName:element.D,
        //             status:element.E,
        //             town:element.G,
        //             customerType:element.I,
        //             type:element.K,
        //             salesManager:element.M,
        //             reportingManager:element.O
        //  }

        const newJsonData = JSON.stringify(customer)
        fs.writeFileSync('new_swiss_customer.json', newJsonData + ","
            , {
                encoding: "utf8",
                flag: "a+",
                mode: 0o666
            })
    });
}

module.exports= {
    CovertdataJson: covertdataJson,
    ReadJsonFile: readJsonFile,
    Looping: looping

}