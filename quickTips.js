// 1. Find unique number from an array.

const array = [1,2,3,2,3,2,5,6,2,7,7,7,7];
const uniqueArray = [... new Set(array)];    // Set operator always give unique numbers.
console.log(uniqueArray);

// 2. Int to String

const num = 32;
const numStr = num + "";
console.log(numStr);
console.log(typeof(numStr));
console.log(typeof(num));
console.log(numStr + 10);

// OR

const numInt = 53;
const numString = String(numInt);
console.log(numString + 20);
console.log(typeof(numString));

// 3. float to int

const numfloat = 34.65;
console.log(typeof(numfloat));
const intnum = parseInt(numfloat);
console.log(intnum);

// 4. check if a variable is a number
const value = 10;
if(typeof value === 'number' && !isNaN(value)) {
    console.log("is a number");
    
}
else{
    console.log("not a number");
}

// 5. Swap variable values.

let a = 10;
let b = 5;
[a,b] = [b,a];
console.log(a,b);

// 6. check if an object has a property.

const person = {
    name : 'John',
    age : 23
};

if(person.hasOwnProperty("name1")) {
    console.log("property is available");
    
}
else{
    console.log("property not available.");
    
}

// 7. Remove falsy values from an array. (false,0,"",null,undefined,NaN)

const val = [0,1,2,false,"",4,5,null, 8.9, undefined,NaN,5];
const newVal = val.filter(Boolean);
console.log(newVal);

// 8. String convert to upperCase and LowerCase.

const nameString = "Naveen Automation";
console.log(nameString.toUpperCase());
console.log(nameString.toLowerCase());
console.log(nameString.toLocaleLowerCase());

// 9. check if an array contains a specific value.

const lan = ["java", "rubby", "Python", "JS", "C++"];
if (lan.includes("cSharp")) {
    console.log("language is present");
    
}
else{
    console.log("language is not present");
}

//10. check if an array is empty or not.

const empty = [];
if(empty.length === 0) {
    console.log("array is empty.");
    
}

// 11. generate random number.

const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min +1)) + min;
console.log(randomNum);

// 12. Join array elements into a string

const words = ["Hello" , "Naveen"];
console.log(words.join(" "));

// 13. get object property:

const user = {
    name : 'John',
    age : 23,
    dob : "01-01-2010"
};

console.log(user.name);
console.log(user.dob);
console.log(user.age);
console.log(user['age']);

// 14. Clone an array or object.

const marks = [20,45,67,88,56,98];
const marksDuplicate = [...marks];    // for pbjects use {...<obj name>}
console.log(marksDuplicate);

const userDuplicate = {...user};   // spread operator ...
console.log(userDuplicate);

// 15. convert object to array.

const emp = {
    name : 'John',
    age : 23,
    dob : "01-01-2010"
};

// keys array
console.log(Object.keys(emp));

// values array
console.log(Object.values(emp));

// key-values array
console.log(Object.entries(emp));

// 16. Get current date and time.

const currentDate = new Date();
console.log(currentDate.toLocaleString());
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleTimeString());

// 17. Truncate an array

const testing = [0,1,2,3,4,5,6,7];
testing.length = 4;
console.log(testing);

// 18. last item of an array.

let arr = [1,2,3,4,5,6,7,8,9,0,9]; 
let newarr = arr.slice(-1);   
console.log(newarr);






