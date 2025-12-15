// Parent or Super class.
// Parents can have n number of child classes.Child can inherit properties from parent but not from siblings.
// Multiple inheritance is not allowed in JS.

class Automobile {

    constructor(chassisNo) {

        this.chassisNo = chassisNo;
    }

    useAeroDynamics(){
        console.log("Automobile -- AeroDynamics");
        
    }
}

class vehicle extends Automobile{

    constructor(make, model, year) {

        super(2000);          
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getinfo() {
        return `${this.make}, ${this.model}, ${this.year}`
    }

    startEngine() {
        console.log("Start Engine !!!" + " " +this.make + " -- From Parent");
        
    }

    stopEngine() {
        console.log("Stopping engine !!! -- From Parent");
        
    }
}

// Child class 1

class car extends vehicle {

    constructor(make, model, year, fuelType) {

        super(make,model,year);    // SUPER keyword is used to call parent class constructor.
        this.fuelType = fuelType;
    }

    driveCar() {
        console.log("Driving a car !!!!" + this.model);
        
    }
}

// Child class 2

class truck extends vehicle {

    constructor(make, model, year, loadingCapacity) {

        super(make,model,year);    // SUPER keyword is used to call parent class constructor.
        this.loadingCapacity = loadingCapacity;
    }

    driveTruck() {
        console.log("Driving a Truck !!!!" + this.model) + "Capacity" + this.loadingCapacity;
        
    }
}


const Car = new car("Honda", "Jazz", 2024, "Petrol");
const Truck = new truck("TATA", "SUMO", 2023, 100);

Car.driveCar();
Car.startEngine();
console.log(Car.getinfo());
Car.useAeroDynamics();
console.log(Car.chassisNo);



Truck.driveTruck();
Truck.stopEngine();
console.log(Truck.getinfo());
Truck.useAeroDynamics();

