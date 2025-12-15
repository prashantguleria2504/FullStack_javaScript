// 1. Object Literals: {}

const user = {
    name : 'Mickel',
    age : 24,
    country : 'USA',
    occupation : 'Engineer'
};
console.log(user.country);

// 2. Using Constructor function

function car(brand,model,price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
const c1 = new car("Hyundai" , "2024" , '15L');
console.log(c1.brand + " " + c1.model + " " + c1.price);

// 3. Class Style

class customer{
    constructor(name , product) {
        this.name = name;           // Instance Variable
        this.product = product;
}
    addtoCart() {
        console.log(`${this.product} added to cart`);    
    }

}
// create instance or object of the class will call the constructor
const cust1 = new customer("Naveen" , "Apple mac pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addtoCart();

// 4. Object.create(); -- this allows you to craete an object with specific prototype object.

const employeePrototype = {
    printInfo : function() {
        console.log(`hello , employee name is ${this.name}`);
        
    }
};
const e1 = Object.create(employeePrototype);
e1.name = "tom";
e1.printInfo();

// 5. Using Factory functions: Fatory function is a special function that returns and object, also it allows you to create multiple instances of the object.

function createDepartment(deptName, hod) {
    return {
        deptName : deptName,
        hod : hod,

        getDeptInfo : function() {
            console.log(`hello , department name is ${this.deptName} and HOD is ${this.hod}`);
            
        }
    }
}

const depDetails = createDepartment("Electronics" , "Ram");
const depDetails2 = createDepartment("Mechanical" , "Shyam");
depDetails.getDeptInfo();
depDetails2.getDeptInfo();

console.log(depDetails.deptName + " " + depDetails.hod);
