
const randonNoPromise = new Promise((resolve,reject) => {

    // async operation.
    setTimeout(() => {

        const randomNo = Math.random();

        if(randomNo > 0.5) {

            resolve(randomNo);
        }
        else {

            reject(new Error ("value is too small ...!!"));
        }
        
    }, 2000);

});

randonNoPromise
.then(result => {
    console.log("promise is fulfilled with a value : " + result);
    
})
.catch (error => {
    console.log("promise is rejected with : " + error);
    
});