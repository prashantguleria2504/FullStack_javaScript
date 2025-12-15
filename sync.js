
// in sync programming in JS, each line of code is executed one after the other, and the program waits for each operation to complete before moving to next.
// This leads to blocking behaviour, where long running operations can cause the entire program to become unresponsive until those are finished. 

// in async programming in jS, JS allows the task to start and continue in the background while the program execute other code. This is useful for tasks like fetching data from 
// server or reading files.


console.log("Start");

setTimeout(() => {
    console.log("Timeout is done..!!");
    
}, 2000);

console.log("END");



