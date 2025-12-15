
// used for handling multiple promises and resolving with the value of the first fulfilled promise.
// However, unlike promise.race(), promise.any() does not reject immediately when first promise rejects, instead it will wait untill at least one promise fullfills.


// const Prom1 = () => {

//     return new Promise((resolve,reject) => {

//         setTimeout(() => {

//             resolve("Resolved 1..!!");
//         },4000);

//     });
// };

const Prom2 = () => {

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            reject("Rejected 2..!!");
        },1000);

    });
};

const Prom3 = () => {

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            reject("Rejected 3..!!");
        },2000);

    });
};

// const Prom4 = () => {

//     return new Promise((resolve,reject) => {

//         setTimeout(() => {

//             resolve("Resolved 4..!!");
//         },3000);

//     });
// };

//Promise.any([Prom1(), Prom2(), Prom3(), Prom4()])

Promise.any([Prom2(), Prom3()])
.then(result => {

    console.log("result : " + " " + result);
    
})
.catch(error => {

    console.log("Rejected reason : " + " " + error);
    
})


