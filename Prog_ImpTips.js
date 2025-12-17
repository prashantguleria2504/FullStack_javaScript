// 1. Find unique values from an array:

let arr = [3,1,4,2,5,3,2,6];

let uniqueVal = [...new Set(arr)];
console.log("Unique values are : " + uniqueVal);

console.log("*******************************************int to String*********************************************************");

// 2. int to String

const num = 32;

const numStr = num.toString();
//OR
const StrNum = num + '';

console.log(typeof numStr);
console.log(numStr + 10);

console.log(typeof StrNum);
console.log(StrNum + 13);

console.log("**************************************Float to integer **************************************************************");

// 3. Float to integer 

let floatNum = 45.3;

let intNum = parseInt(floatNum);
console.log(intNum + " " + ": " +  typeof intNum);

console.log(intNum + 10);

console.log("******************************************Swap variable values**********************************************************");

// 4. Swap variable values.

let a = 4;
let b = 10;

[a,b] = [b,a]

console.log("Swap variable value : a : "+ " " + a);
console.log("Swap variable value : b : "+ " " + b);

console.log("****************************************object has a property************************************************************");

// 5. check if an object has a property

let person = {
    name : "Ram",
    age : 45
}

console.log("name" in person);
console.log(person.hasOwnProperty("sex"));

console.log("***************************************remove falsy values*************************************************************");

// 6 remove falsy values from an array.  (false, "", null, undefined, NaN, 0)

let values = [0,1,false,3,4,"",5,0,NaN,null];

let filVal = values.filter(Boolean);

console.log(filVal);
console.log("filtered values : " + " " + filVal);

console.log("************************************String >> upparcase >> lower case****************************************************************");

// 7. String >> upparcase >> lower case

let str = "Automation LABS";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log("*********************************************array contains specific value***********************************************************");

// 8. check if an array contains specific value.

let arr1 = ["banana", "apple", "grapes", "carrot"];

console.log(arr1.includes("apple"));

console.log("***********************************************array is empty array or not************************************************************");

// 9. chk if an array is empty array or not

let arr2 = [];

let emptyarray = arr2.length === 0 ? "empty array" : "not empty array"
console.log(emptyarray);

console.log("************************************************Generate random number*****************************************************************");

// 10. Generate random number

let c = (Math.random() * ((200 - 10) + 1) + 10)
console.log(c);

console.log("Random number : " + " " + Math.random());

console.log("***********************************************Join an array****************************************************************************");

// 11. Join an array

let word = ["Naveen" , "Automation"];

console.log(word.join("_"));

console.log("************************************************Convert object to an array.**************************************************************");

// 12. Convert object to an array.

const person1 = {
  name: "Prashant",
  age: 35,
  city: "Pune",
  skills: ["JavaScript", "Playwright", "Python"],
  isActive: true
};

console.log(Object.entries(person1));
console.log(Object.keys(person1));
console.log(Object.values(person1));

console.log("***************************************************fetch current date and time************************************************************");

// 13. how to fetch current date and time

let newDate = new Date();
console.log(newDate);
console.log(newDate.toLocaleString());

