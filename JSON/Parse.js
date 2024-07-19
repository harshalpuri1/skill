let jsonParse = '{"Name": "Harshal", "MiddleName": null, "age": 22, "Marks":99.90 , "Subjects":["Marathi", "Hindi", "English", 100] , "Address":{"City":"Jalgoan", "State":"Maharastra", "Country":"India", "Pin": 425001  }}'

console.log(jsonParse);

let jsonParsed = JSON.parse(jsonParse);
console.log(jsonParsed);