/** REST PARAMETERS
 * 1. Denoted by ...<parameter>
 * 2. Allows indefinite number of parameters as an argument
 * 3. Argument objects are available within a function
 * 4. Arguments can be accessed by array like notation [i]
 * 4. has length property
 * 
 */

function addNum (num1, num2, ...numN) {

    console.log(arguments);
    console.log(arguments[3]);
    console.log(arguments.length);

    let total =0
  
    for(let i = 0 ; i<arguments.length; i++) {
        
        total += arguments[i]
    }
    console.log(`sum is ${total}`);
    
}
addNum(2,2,3)



// Self invoking function

(function addTwoNum (num1, num2)
{
    sum = num1+num2;
    console.log(sum);
    return sum
})(7,7)

