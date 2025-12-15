/**
 * 1. String
 * 2. Number
 * 3. boolean
 * 4. Object
 * 5. bigint
 * 6. Array
 * 7. Undefined
 * 8. RegExp (Symbol)
 */

// String

let str = "Hello"
let str1 = 'hello'
let str2 = `${str1} world!!`      // template literal
console.log(str2);

console.log(typeof(str2));

// Number
let num = 5

// boolean
let bool = true

// Object
let obj = {}

// Array
let arr = []

// Reg Exp
let reg = /abc/

console.log(typeof arr);

// Truthy , Falsy and nullish values

/** Falsy values are: 
 * false, undefined, 0, null, NaN, "" (empty string)
 * 
 * in Boolean and non-boolean context : Undefined: false , NaN
 *                                      null : false , 0
 */


let val = null

let val2 = 5 + undefined   // in numerical context undefined = NaN
console.log(val2);

let val3 = 5 + null     // in numerical context null = 0
console.log(val3);


if(val3) {
    console.log("Condition met....");  
}
else {
    console.log(`Given value : ${val3} >> is falsy....`); 

}


let a = 0
if (a) {
    console.log("a is", a) }



