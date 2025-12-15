/**
 * Variable name should start with a letter or _ or $.
 * System reserved keywords cant be variable names like if,else,throw,break
 */

// Types : var : old way  => scope: functionally or locally  + Global scope
// Re-declaration and re-initialization both are allowed with var.
// if variable is only initialized but no value is declared then JS will assign a default value to the variable "undefined"

/*
re-declare : only var
re-assign or re-initialised : both var & let
const : nothing
Var : scope is global level or function level
let : scope is global level or block level {}
*/

var a = 3;   // Global
function test()
{
    var b = 20;  // local or functional variable
    
}


var pop = "hi js !!";

function rel()
{
    var top = "Hello js!!"
    console.log(top);
    
}
rel();
console.log(pop);


// redeclaration & re-initialization is allowed in JS

var browser = "Chrome";  // here we are initializing a variable and also declaring the value for a variable browser.
var browser = "Firefox"; // here we are initializing a variable and also re-declaring the value for a variable browser.
browser = "edge";        // here we are initializing or updating the value of browser.
console.log(browser);   // will always print the lasted variable's value.

// if variable is only initialized but no value is declared then JS will assign a default value to the variable "undefined"
var g;
console.log(g);

// problem  with var is if a condition satisfies then the variable gets re-declared again.

var flag = "Hi Tom";
var t1 = 4;
if(t1 > 3)
        {
            var flag = "Hi Ram";
        }
 console.log(flag);    // in this case it will print Hi Ram as the variable is getting re-declared after the condition is met. Hi tom is lost.
        


