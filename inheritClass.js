
const Person = require('./class')

class Pet extends Person {

    get location() {
        return "BlueCross"
    }

    // if parent class has a constructor then child class should also implement that constructor.

    constructor(firstname , lastname) {

        // child class constructor should always call parent constructor.

        super(firstname , lastname)
    }
}

let obj = new Pet("sam" , "san")

console.log(obj.fullname());

console.log(obj.gender("male"));

console.log(obj.location);  // child location

console.log(obj.age);   // parent age

