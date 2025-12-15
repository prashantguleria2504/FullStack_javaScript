// Scope: Block {} scope
// let variable can be updated or re-initialized but cant be re-declared again.

/*
re-declare : only var
re-assign : both var & let
const : nothing
*/

let m = "hi naveen!";    // Global
let time = 4;            // Global
if(time > 3)
{
    let msg = "How r u..";
    console.log(msg);       // Block level, cant be used outside the block.

}
console.log(m);


let a = 4;
a = 6;      // updating the value aagain to 6.
console.log(a);


// Constant : const

// defining constant values. cant be re-initialized again once declared.
// const always need to initialise and declare.

const msg = "hi tom";
msg = "Hi Shyam";
console.log(msg);