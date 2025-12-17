// Strings are immutable, cant be changed.

let day = "Tuesday "

console.log(day[3]);
console.log(day.length);

let slice = day.slice(3,6)
console.log(slice);

let splitDay = day.split("s")
console.log(splitDay);

console.log(splitDay[1]);

console.log(splitDay[1].trim())

let date = "23"
let date3 = "27"

let dif = parseInt(date3) - parseInt(date)
console.log(dif);

let toString = dif.toString()
console.log(toString);
console.log(typeof(toString));

// Concatinate two strings:

let conc = day + "funday"
console.log(conc);

let val = conc.indexOf("day")
console.log(val);


// Find occurance of day in a String
let quote = "Tuesday funday"

let value = quote.indexOf("day")
console.log(value);

let count = 0
while (value!== -1) {

    count++
    value = quote.indexOf("day" , value +1)
}
console.log(count);

