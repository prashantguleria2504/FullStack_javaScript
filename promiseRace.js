
// Promise.Race() will return the status of the function that wins the race of completition.

const resolvePromise = () => {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Resolved..!!");
        }, 1000);
    });
};


const rejectPromise = () => {

    return new Promise(reject => {

        setTimeout(() => {

            reject("Rejected..!!");
        }, 2000);
    });
};


Promise.race([resolvePromise(), rejectPromise()])
.then((result) => {

    console.log("Result : " + " " + result);
    
}).catch((error) => {
    
    console.log("Reject : " + " " + error);
});
