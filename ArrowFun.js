
// Arrow function is a type of anonymous function that does not have any name.

// Method 1: If there is only one parameter.

const squareOfNum = (num) => num*num;
console.log(squareOfNum(3));

// Method 2: with NO parameter

const msg = () => "Hello js !!!!";
console.log(msg());

// Method 3: with TWO parameter

const mul = (a,b) => a*b;
console.log(mul(2,3));


// Method 4: with objects 
const person = {
    firstName : "Ram",
    lastName : "Singh",
    age : "45",
    sex : "Male"
};
const details = (person) => `${person.firstName} ${person.lastName}`

console.log(details(person));

// Method 5 : concatinations

const greet = (userName = 'Guest' , age = 23) => `Hello ${userName} you are ${age} years old !!`
const fullsen = greet();
console.log(fullsen);

const g2 = greet("Tom" , 56);    // this will ignore the default values from line 34 and will give new values.
console.log(g2);

// Method 6: Arrow function with rest parameters i.e ... or var arg

const arr = (...number) => number.reduce((acc, num) => acc + num , 0);    // ... means array
const total = arr(1,2,3,4,5);
console.log(total);

// Mwthod 7: with default value

const browserInfo = (browser = "Chrome" , ...data) => {
    console.log(`Browser : ${browser}`);
    console.log("other details" , data); 
};

browserInfo();
browserInfo("Mozilla", "v10", "headlessMode");

// Max number using maths library:

const maxVal = (a,b,c) => {     // if arrow function has a body then we need to write return.
    return Math.max(a,b,c);
};
const maxNum = maxVal(2,4,1);
console.log(maxNum);



