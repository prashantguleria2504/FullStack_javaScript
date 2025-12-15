
function getEvenNumber(value, delay) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(value % 2 === 0) {
                resolve(value);           
            }
            else {
                reject(new Error("value is not an Even number."));
            }
            
        }, delay);

    });

};

// promise Chain

getEvenNumber(4,1000)
    .then(result => {
        console.log("Step 1: getting the result : " , result);
        return getEvenNumber(3,2000);
        
    })
    .then(result => {
        console.log("Step 2: getting the result : " , result);
    })
    .catch(error => {
        //console.log("Promise chain not fulfilled : " + " " + error.message);
        console.log("Promise chain not fulfilled : ", error.message);
        
    })