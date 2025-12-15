
// Promise.allSettled():

// returns single promise that is fulfilled with an array of result objects, one for each promise.
// Each result object contains:
// a status (either "fulfilled" or "rejected") and 
// a value (fulfilled value) or reason (rejection reason).

// Useful when we want to process all promises, whether they succeed or fail.
// and you want to gather information about the outcome of each promise.

// f1: resolve & f2 rejected

const getData1 = ()=> {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            
            resolve("Data from getData...!!")
        }, 2000);
    });
};

const getError = ()=> {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            
            reject("Error : Data not available from getError..!!")
        }, 2000);
    });
};

Promise.allSettled([getData1(), getError()])
.then(results => {                                                           // this result will carry the status of each promise.   
    results.forEach(result => {
        if(result.status === "fulfilled") {
            console.log("value: ", result.value);
            
        }
        else {
            console.log("reason for rejection: ", result.reason);
        }
    })
})