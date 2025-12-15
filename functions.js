// 1. Function declaration

function add(a,b) {
    return a+b;
}
console.log(add(5,6));

function print(){
    console.log("Hi this is JS..!!!");  
}
print();

// 2. Function Expression -- This is anonymous function, has to be assigned to a specific variable, which can be called using variable name.

const multiply = function (x,y) {         // multiply is a function name.
    return x*y;
}
console.log(multiply(2,3));

// 3. Arror Function expression

const div = (t1,t2) => t1/t2;
console.log(div(10,2));

// 4. Function Constructor -- create and initialise objects in the same structure.

const addition = new Function("a","b","return (a+b)");
console.log(addition(4,4));

// 5. IIFE (Immediately invoked Function Expression) -- Self invoking function that is declared and executed immediately. no need to call this it will invoke autometically.

(function() {
    console.log("I am IIFE !!!");
      
})
();  

// 6. Generator Function -- function that returns an iterator object for generating sequence of values.

function* generateNumberSequence() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const gen = generateNumberSequence();
console.log(gen.next().value);
console.log(gen.next().value);

// 7. Annonymous function: No specific name. this function behaves as a callback function.

const number = [1,2,3,4,5];

const sqnum= number.map(function(e) {
    return e*e;
});

console.log(sqnum);

// 8. Recursive function : function that calls itself during the execution.

function factorial(n) {
    if(n===0 || n===1) {
        return  1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(4));

// 9. Higher order Function : Its is a function that takes one or more functions as an argument.





