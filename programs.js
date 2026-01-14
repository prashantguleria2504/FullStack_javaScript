
// 1. Find occurances of an element in an array.

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitcount = fruits.reduce((acc,fruit) => {
    acc[fruit] ??= 0;
    acc[fruit] ++;
    return acc;
}, {});

console.log(fruitcount);

console.log("************************************************************************************");

// operators in JS
/*
The logical OR assignment (||=) operator in JavaScript assigns a value to a variable only if the variable is falsy (false, 0, "", null, undefined, NaN).

The &&= operator is the logical AND assignment operator in JavaScript. It assigns a value to a variable only if the variable is truthy.

The ??= operator is the nullish coalescing assignment operator in JavaScript. It assigns a value to a variable only if that variable is null or undefined.
*/

// 2. anagram grouping function:

words = ["listen", "silent", "enlist", "rat", "tar", "art", "evil", "vile", "live"];

const mod = words.reduce((acc,word) => {

    let key = word.split("").sort().join("");

    (acc[key] ??= []).push(word);
    return acc;

},{});
console.log(mod);

console.log("************************************************************************************");

// 3. Adding numbers in an array.

let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
let arrSum = 0;

for(let i=0; i<arr.length; i++) {

    let arrayEle = arr[i];

        if(typeof arrayEle != "string") {
            arrSum +=arr[i]      
        }

}
console.log(arrSum);

// OR

let sum = 0;
arr.reduce((acc,num) => {

    if(typeof num !== "string") {
        sum +=num
    }
    return acc;
},0);
console.log(sum);

// OR

let num = arr.filter((e) => typeof e !== "string");
console.log(num);

let sumofnum = num.reduce((acc,numb) => {

    acc += numb;
    return acc;
},0)
console.log(sumofnum);

console.log("************************************************************************************");

// EXtract data from a String:
let dt = "2022-02-26"

let splitData = dt.split("-");
console.log(`Year : ${splitData[0]} , month  : ${splitData[1]} and date  : ${splitData[2]}`);


let filename = "invoice_123.pdf"
let newFileName = filename.replace(".pdf" , ".csv")
console.log(newFileName);

console.log(filename.substring(0,11));

console.log("************************************************************************************");

// Remove duplicates from an Array

let names = ["Naveen", "Tom", "Lisa", "Naveen", "Peter", "Raj", "Tom", "Robby", "Tom"]

let uniqueNames = [...new Set(names)]
console.log(uniqueNames);

console.log("************************************************************************************");

// Reverse an array

let a = [1,2,3,4,5,6,6,6,7,3,2]
console.log(a.reverse());

console.log("************************************************************************************");

// Reverse a number 

let b = 2345678
console.log(typeof(b));

let rev = parseInt(b.toString().split("").reverse().join(""))
console.log(rev);

console.log(b.toString().split("").reverse().join(""));

