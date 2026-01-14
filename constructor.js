class Calculator{
    
    num = 100;
    constructor(a,b){

        console.log("I am a constructor.");
        this.firstnum = a;
        this.secondNum = b;     
    }

    getData(){
        console.log("I am a method inside a class.");  
    }

    summation(){
        return this.firstnum + this.secondNum
    }

    addition(c,d){
        return c+d+this.num
    }

}

let obj = new Calculator(2,3);
console.log("Class variable : " + obj.num)
obj.getData();
console.log("summation function : " + obj.summation());

let obj1 = new Calculator;
console.log("Addition function : " + obj1.addition(3,3));

let obj2 = new Calculator;
add = obj2.addition(3,3) + obj2.num
console.log("Addition function : " + add);


