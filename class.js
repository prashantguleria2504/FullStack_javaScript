


class Person{
    age = 34

    // defining a property using getter method. This is used when we have multiple lines of code.
    get location(){
        return "canada"
    }

    // Constructor : method which gets execute once object of class is created.
    // we give variables in a constructor those are called instance variables. There values are decided at run time i.e while creating class object.

    constructor(firstname , lastname) {
        this.FirstName = firstname       // this represents current class, thus can be used across class.
        this.LastName = lastname
    }

    // methods in a class
    fullname() {
       return this.FirstName + " " + this.LastName
    }

    gender = (gen)=> {
        return gen
    }


}

// to access the value from a class we need to create object of the class.

// let obj = new Person("ram" , "Kumar")
// console.log(obj.age);
// console.log(obj.location);
// console.log(obj.FirstName);
// console.log(obj.LastName);
// console.log(obj.fullname());
// console.log(obj.gender("female"));

module.exports = Person

