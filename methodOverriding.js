// when child class has same methods as that of its parent class.
// Parent class can not access any methods or variables from child class, but child class can inherit from parent class.
// Method overriding happens when a child class (subclass) provides its own implementation of a method that is already defined in its parent class (superclass).


class car {

    constructor(make,model) {

        this.make = make;
        this.model = model;
    }

    carEngineStart() {

        console.log("Car Engine starts..!!");
        
    }

}

class Audi extends car {

    carEngineStart() {               // over ridden method.

        console.log("AUDI Engine starts..!!");
        
    }

    autoParking() {

        console.log("Audi autoparking ..!!");
        
    }
}

const c1 = new Audi("2023" , "XL3");
console.log(c1.make);
console.log(c1.model);
c1.carEngineStart();
c1.autoParking();

const c2 = new car("2000" , "Maruti");
console.log(c2.make);
c2.carEngineStart();


