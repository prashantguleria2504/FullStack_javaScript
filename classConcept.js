// Constructor overloading is not allowed in JS. Class can have n number of objects but only one constructor.

class car {

    // Constructor

    constructor(name, price, model, color) {

        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;

    }

    // function

    refuel() {
        console.log(this.name + " " + "Car is refueled !!!");
        
    }


}

const carDetails = new car("Creta" , 1500000 , 2024 , "BLACK");    // new keyword to create the class object.
console.log(carDetails);    // carDetails is object reference variable.
console.log(carDetails.color);
carDetails.refuel();


const carDetails2 = new car("Maruti" , 1000000 , 2024 , "RED");
console.log(carDetails2);
console.log(carDetails2.name);
carDetails2.refuel();





