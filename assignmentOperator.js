/** ASSIGNMENT OPERATORS
 * =, +=, -=, *=, /=
 */

// case 1 : Basic
let a = 1;

// case 2: Chaining
let x = y = 1

// case 3: += (Self increment)
let start = 5
for (let i=1; i<=5; i++ ) {

    start += i       // same as start = start + i;
    console.log("start = " + start);
    
}


/**ARITHMETIC OPERATORS
 * 
 * Basic: +,-,*,/,**
 * Others: %,**,--
 */

// User Case 1: % Find a remainder

let b = 2;
console.log("remainder = " + 5 % 2);

// USer Case 2: Increment (++) & Decrement (--)

for(let c=5; c>0; c--) {
    console.log(c);
    
}


// Use Case 3: Unary plus
console.log("Unary : " + "3" + 3);   // when one operand is string then it automatically converts other to string and does concatination operation.

console.log(+"3" + 3);   // adding + infrount of a string number will convert it to int.

/**COMPARISION OPERATORS
 * 
 * == (checks only the value), === (strict equality operator: checks value + type)
 * != , !==, >, >=, <, <= 
 * Returns boolean
 */

let d=4;
let e="4";
let f = "one"

console.log(d == e); // JS attempts to convert the operand to appropriate type for a comparision.
console.log(d === e);
console.log(+f);  // NaN
console.log(f == e);

console.log(d != e);  // not equal to


/**LOGICAL OPERATORS
 * 
 * == (checks only the value), === (strict equality operator: checks value + type)
 * && -- AND , || -- OR, ! -- NOT
 *
 * Main Purpose: 1) In conditional statements (if .. else) 2) To have a default value.
 */


// Use case 1: && check if given value is text.

let val = "Monday"
if(typeof val === "string" && val.length >1) {
    console.log(`Given value : ${val} is a string.`);
}
else {
    console.log(`Given value : ${val} is not a valid  string.`);
}


// Use case 2: OR operator - ||  -- chk if the given day is a weekend or not

if(typeof val === "string" && (val == "Saturday" || val == "Sunday")) {
    console.log(`Given value : ${val} is a Weekend.`);
}

else {
 
    console.log(`Given value : ${val} is not a weekend.`);
}


// User case 3: NOT operator (!)  -- this will reverse the value i.e if true it will make it false and viceversa.

let firstname = "Rob"

if(!firstname) {
    console.log(firstname);
    
}
else{
    console.log("False value.");
    
}


// Use Case 4: OR (||) -- assign a default value.

let targetBrowser = "IE"
let browser = targetBrowser || "Chrome"  // if right operand returns false then chrom will be selected else default value.
console.log(browser);


/**TERNARY OPERATORS
 * 
 * Syntax: <Condition> ? "val1" : "val2"    // if expression returns true then val1 will b ereturned else val2.
 * 
 * short form of if..else 
 */

// Set log value for different env.

// Basic use:

let runner = "Cloud"
let logValue = runner === "local" ? "Info" : "Error"
console.log(logValue);



// Advance use:

let logValue1 = runner === "local" ? "Info" : (runner === "Cloud" ? "Silent" : "Error")
console.log(logValue1);