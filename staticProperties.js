
// Common properties are defined as static.
// Static propertices are called using class name, while non-static variable or functions can be called using object reference name.
// these are created when we see that all the objects need one common value.


class car {

    static wheel = 4;

    constructor(name,model,price) {

        this.name = name;
        this.model = model;
        this.price = price;
    }

    static stop() {
        console.log("Car --- STOP");
        
    }

    drive() {
        console.log(this.name + " " + "is driving !!");
        
    }
}

const c1 = new car("honda","Amaze - 2023", "13L");
console.log(`${c1.name}, ${c1.model}, ${c1.price}, ${car.wheel}` );
car.stop();
c1.drive();

