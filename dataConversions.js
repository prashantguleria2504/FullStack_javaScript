/**
 * parseInt()
 * parseFloat()
 * unary plus operator
 * toString() method
 */

let val1 = "5";
let val2 = "5.5";

console.log(`Type of value of val1: ${typeof(val1)}`);
console.log(`Type of value of val2: ${typeof(val2)}`);

// convert String to int

let numval3 = parseInt(val1);
console.log(`Type of value of converted numval3: ${typeof(numval3)}`);

let numval4 = parseFloat(val2)
console.log(`Type of value of converted numval4: ${typeof(numval4)}`);


// Unary plus operator
let unaryval5 = +val1
let unaryval6 = +val2

console.log(`Type of value of converted string val1 using unary + operator: ${typeof(unaryval5)}`);
console.log(`Type of value of converted string val1 using unary + operator: ${typeof(unaryval6)}`);

// convery toString

let num = 7
console.log(`Type of value of : ${num} = ${typeof(num)}`);
console.log(`Type of value of converted : ${num} = ${typeof(toString(num))}`);

