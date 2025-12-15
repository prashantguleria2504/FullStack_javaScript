// a function that is passed as an argument to another function.
// executed after a specific task. Called with the async call.
//A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some kind of event or operation has completed. 
// It's a fundamental concept in asynchronous programming and event handling.



// 1. Basic function

function greet(name,callback) {
    console.log("Hello" + " " + name);
    callback();
    
}

// callback function

function welcome() {
    console.log("Welcome !!!!");
    
}

greet("Naveen", welcome);

// 2. callBack with async function"

function printInfo(Name , callback) {

    // async function
    setTimeout(function() {                                 // setTimeout is a default async function provided by JS.

        console.log("printing info for :" + " " + Name);
        callback("plz call me back");
        
    },2000);
}

// callBack

function displayMessage(msg) {

    console.log(msg);
    
}

printInfo("Lisa" , displayMessage);


// 3.

function fetUserData(userId , callback) {

    setTimeout(()=> {

        const users = {

            1 : {id : 1 , name : "Naveen"},
            2 : {id : 2 , name : "Tom"}
        };
    
        const user = users[userId];
    
        if (user) {
    
            callback(null , user);
        }
        else {
            callback("User not found..." , null)
        }

    },2000)
    

}

// callback function

function handleUserData(error , user) {

    if(error) {
        console.log("Error : " ,  error);
        
    }
    else {
        console.log("User : " ,  user);
        
    }
}

fetUserData(3,handleUserData);
