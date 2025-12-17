console.log("-----------------Common multiples of 2 & 5-------------------------------");

for (let k = 1 ; k <=10 ; k++) {

    if(k%2 == 0 && k%5 == 0) {     // && AND ; || OR
        console.log(k);   
    }

}

console.log("-----------------first 3 common multiples of 2 & 5-------------------------------");
let n=0

for (let z = 1 ; z <=100 ; z++) {

    if(z%2 == 0 && z%5 == 0) {    
        n++ 
        console.log(z);   
    }
    if(n==3) {
        break
    }

}

// OR

let val = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        val.push(i);   // push the number itself

        if(val.length === 3) {
            break
        }
    }
}
console.log(val);


console.log("-----------------Find even numbers from array using REDUCE-------------------------------");

let score = [12,13,14,16];

let even = score.reduce((acc,num) => {

    if(num%2==0) {
        acc.push(num)
    }
    return acc
     
},[])
console.log(even);

// OR

let evennum = []
for(let i=0; i<score.length;i++) {

    if(score[i] % 2 == 0) {
        evennum.push(score[i])
    }
}
console.log(evennum);

// OR

let evennum1 = score.filter((e) => e%2==0)
console.log(evennum1);

console.log("-----------------Find occurance of day in a String-------------------------------");

let quote = "Tuesday funday"

let value = quote.indexOf("day")
console.log(value);

let count = 0
while (value!== -1) {

    count++
    value = quote.indexOf("day" , value +1)
}
console.log(count);

// OR

let count2 = quote.split("day").length-1;
console.log(count2);

console.log("-----------------print all the values of a object -------------------------------");
// print all the values in the object

let person = {
    "firstname" : "Ram",
    "seconfName" : "Kumar",
    "age" : 34
}

for (let key in person) {      // enhanced for loop
    console.log(person[key]);
 
}


console.log("-----------------Itetrate over an object in a class with nested object -------------------------------");

class Person {
  constructor() {
    this.details = {
      name: "Aditi",
      age: 25,
      gender: "female",
      address: {
        city: "Pune",
        state: "Maharashtra",
        pin: 411001
      }
    };
  }
}

let p = new Person;

let ent = Object.entries(p.details);
console.log(ent);

ent.forEach(([key , value]) => {

    if(typeof value === "object") {
        console.log("nested object :" + key , value);
        
    }
    else{
        console.log(key , value);
        
    }
})

console.log("-----------------count the occurance in an array -------------------------------");

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let countfruit = fruits.reduce((acc , fruit) => {

    acc[fruit] ??= 0;
    acc[fruit] ++
    return acc
},{})
console.log(countfruit);

console.log("-----------------Find min and max value from an array -------------------------------");

let expenses = [1200, 4450, 320, 800, 2550];

let totalexpense = expenses.reduce((acc,exp) => acc + exp , 0)
console.log("total expenses : " + totalexpense);

let high = 0
expenses.filter((e) => {

    if(e>high) {
        high = e
    }
})
console.log("Highest individual expense : " + high);

// OR

minvalue = Math.min(...expenses)
console.log("Lowest individual expense : " + minvalue);

highVal = Math.max(...expenses)
console.log("Highest individual expense : " + highVal);

// OR

// Assume the first element is the minimum
let minValue = expenses[0];

// Loop through the array
for (let i = 1; i < expenses.length; i++) {
    if (expenses[i] < minValue) {
        minValue = expenses[i]; // update minValue if a smaller number is found
    }
}

console.log("Lowest expense:", minValue);

// OR

let max2= expenses.reduce((acc,exp) => acc > exp ? acc : exp);     // ternary operator, and it works like a compact if–else.
console.log(max2);


console.log("--------------------------------------------------------------------------------");

const studentNames = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

// Add a new student name to the beginning of the array.

studentNames.unshift("Raj")
console.log(studentNames);

// Remove the last student name from the array.

studentNames.pop()
console.log(studentNames);

// Alphabetize the student names within the array.

studentNames.sort()
console.log(studentNames);

console.log("---------------------------------Group Anagrams-----------------------------------------------");

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

let values = words.reduce((acc,word) => {

    let key = word.split("").sort().join("");
    acc[key] ??= [];
    acc[key].push(word);
    return acc

}, {})
console.log(values);

console.log("---------------------------------find two numbers in an array that adds up to a given target----------------------------------");

function twoSum(nums , target) {

    const seen = {}

    for (let num of nums) {

        let compliment = target - num;

        if(seen[compliment]) {
            return[compliment , num];
        }
        seen[num] = true;
    }
    return []
}

let result = twoSum([2,11,15,5,6,2] , 9);
console.log(result);