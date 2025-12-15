
// collection of properties.

let person = {
    "firstname" : "Ram",
    "seconfName" : "Kumar",
    "age" : 34
}

console.log(person.firstname);
console.log(person["age"]);

// chnage the property

person.firstname = "Tim"
console.log(person.firstname);  // update the property at run time.

// add new property

person.gender = "male"
console.log(person);
console.log(person.gender);

// delete property

delete(person.gender)
console.log(person);

// chk if peroperty exist in the object

console.log("gender" in person)

// print all the values in the object

for (let key in person) {      // enhanced for loop
    console.log(person[key]);
 
}

// concatinate

let fullname = person.firstname + " " + person.seconfName
console.log(fullname);

person.fullname = fullname
console.log(person);

// object can also have a function in it

let person1 = {
    "firstname" : "Ram",
    "seconfName" : "Kumar",
    "age" : 34,

    "fullname" : function() {
        return this.firstname + this.seconfName
        
    }
}
console.log(person1.fullname());

// Extra summary:

let address = {
        city: "Pune",
        state: "Maharashtra",
        pin: 411001
}

console.log(address.city);
console.log(address["pin"]);

address.area = "pimpri"
console.log(address);

console.log(Object.keys(address));  // converts keys into array
console.log(Object.values(address)); // converts values into an array

console.log(Object.entries(address)); // convert object into an array of key, value.