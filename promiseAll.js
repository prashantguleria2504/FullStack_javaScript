
// promiseAll() is used when you want to perform multiple async operations in parallel and wait for all of them to complete before moving ahead.

//Case1: All functions giving resolve promise.

const function1 = ()=> {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            
            resolve("Data from function 1...!!")
        }, 2000);
    });
};

const function2 = ()=> {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            
           // resolve("Date from function 2.....!!!");
           const data2 = [1,2,3,4,5];
           resolve(data2);
        }, 2000);
    });
};

const function3 = () => {

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            
           // resolve("Data from function 3....!!!");
           const data3 = [6,7,8,9,10];
           resolve(data3);
        }, 2000);
    });
};

Promise.all([
    function1(),
    function2(),
    function3()
])
.then(dataArray => {
    console.log("All promises are fulfilled.", dataArray);
    
})
.catch(error => {
    console.log("Error in promise.", error);
    
});


//Case2: f1: resolve & f2 rejected

// if both the promises are resolved then only promise.all will be processed inside .then handler, else it will remain rejected and will always go into .catch block.

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

Promise.all([getData1(), getError()])
.then(result =>{
    console.log("All data fetched." + result);
    
})
.catch(error => {
    console.log("No data fetched : " , error);
    
})