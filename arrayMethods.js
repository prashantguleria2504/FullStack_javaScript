// 1. Map: Calls a defined callback function on each element of an array, and returns an new array that contains the results.
    let arr = [1,3,4,6,2,3,9];
    let mapArr = arr.map((e) => e*2);
    console.log(mapArr);
    
// prob: Covert Ferheneight to celcius  -- (F-32) * (5/9) 

let FerTemp = [23,55,67,98]; 
function conv()
{
    let tempC = FerTemp.map((e) => (e-32)*(5/9));
    console.log(tempC);
    
}
conv();

//OR

function frentoCel(fah)
{
    return (fah-32)*(5/9);
}
let celTemp = FerTemp.map(frentoCel);
console.log(celTemp);

// 2. FILTER : Returns the elements of an array that meet the condition specified in a callback function.
let number = [1,2,45,55,33,76,78,79,69,98]; 
let evenNo = number.filter((e) => e % 2 === 0);
console.log(evenNo);

// Prob

// Arry of objects (key,value pair)
let employee = [
    {name:"John", age:30, gender:"Male"},
    {name:"Ram",  age:35, gender:"Male"},
    {name:"Sue",  age:40, gender:"Female"},
    {name:"Rita", age:25, gender:"Female"},
    {name:"Shyam",age:55, gender:"Male"}
]

let empFilage = employee.filter((emp) => emp.age > 30 && emp.gender === "Female");
console.log(empFilage);

let empFilgen = employee.filter((empl) => {

    return empl.gender === "Female" && empl.age >30;
})
console.log(empFilgen);


// 3. REDUCE : Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
let numb = [1,5,6,3,8,9];
let sum = numb.reduce((acc,num) => acc + num, 1);  
console.log(sum);

// Max number in an array

let top = [10,5,25,8,30,15];
let maxnum = top.reduce((max,num) => {
    if(num > max){
        return num;
    }
    else {
        return max;
    }
       }, top[0])
console.log(maxnum);

// OR

let max1 = numb.reduce((acc,num) => {
    return acc > num ? acc : num        // condition ? valueTrue : ValueFalse
},numb[0])
console.log(max1);

// Cart : total cart price

let cart = [
    {name: "Jeans", price: 100},
    {name: "Shirt", price: 150},
    {name: "T-Shirt", price: 50},
    {name: "Shocks", price: 20},
    {name: "Shoes", price: 500},
    {name: "Hat", price: 70}
];

let totalCartPrice = cart.reduce((acc,num) => num.price + acc, 0);
console.log("Total cart value is  :" + " " + totalCartPrice);

// 4. EVERY(): Determines whether all the members of an array satisfy the specified test. Returns Bollean

let numevy = [1,2,3,4,5];
let flag = numevy.every((e) => e < 10);
console.log("Every flag value : " + " " + flag);

// 5. SOME : Determines whether the specified callback function returns true for any element of an array.

let numsom = [1,2,3,4,5];
let flagsom = numsom.some((e) => e === 5);
console.log("Some flag value: " + " " + flagsom);

// 6. FIND : finds the 1st element in array that satisfies a condition.

let numfin = [1,7,3,4,5];
let flagFind = numfin.find((e) => e  %2 === 0);
console.log("FIND flag value: " + " " + flagFind);

// 7. lastIndexOf() : Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
let fruit = ["Apple", "banana", "pear", "fig", "Apple", "Grapes"];
let lstIndex = fruit.lastIndexOf("Apple");
console.log(lstIndex);

// 8. REVERSE 
let frt = ["Apple", "banana", "pear", "fig", "Apple", "Grapes"];
let rev = frt.reverse();
console.log(rev);

// 9. SORT : Sorts an array in place. This method mutates the array and returns a reference to the same array.
let numsort = [1,2,55,-3,89,4,0,-45];
let srt = numsort.sort();
console.log(srt);




