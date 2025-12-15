// for loop

// when u need to repeat a loop for x number of times use for loop and when u need to repeat loop based on some condition use while loop.

// print 1 to 10

for (let x=1 ; x<=10 ; x++)
{
    console.log(x);
    
}

console.log("------------------------------------------------");

// for...of loop

const a = [1,2,3,4,5,6];
for(const e of a)
{
    console.log(e);
    
}

console.log("------------------------------------------------");
// WHILE loop -- checks the condition and then do the action. loop continues to execut euntil condition becomes false.

let p = 1;
while (p<=10) {
    console.log(p);
    p++;
}

console.log("------------------------------------------------");
// do - while loop : will execute at least once and then chk the condition. first executes and then chks the condition.

let b = 1;
do {
    console.log(b);
    b++;
    
} while (b<=10);

console.log("------------------------------------------------");
// 1 to 100 -- print hi when u see the multiplication of 5 and break.

let num = 1;
while (num <= 100) {
    console.log(num);

    if(num % 5 == 0) {
        console.log("hi");
        break;
    }
    num++;
    
}

console.log("------------------------------------------------");
// for... in loop for objects.

const user = {
    name: "John",
    age: 42,
    city: "Delhi"
}

for(const key in user)
{
    console.log(key + " : " + user[key]);
    console.log(key);
    
}

console.log("------------------------------------------------");

const br = ["firefox","edge","mozilla","IE"];
for(const ele in br) {
    console.log(ele + " : " + br[ele]);
    
}

const ar = ["firefox","edge","mozilla","IE"];
for(const ele of ar) {
    console.log(ele);
    
}


console.log("-----------------Common multiples of 2 & 5-------------------------------");

for (let k = 1 ; k <=10 ; k++) {

    if(k%2 == 0 && k%5 == 0) {     // && AND ; || OR
        console.log(k);   
    }

}

console.log("-----------------firs 3 common multiples of 2 & 5-------------------------------");
let n=0

for (let z = 1 ; z <=100 ; z++) {

    if(z%2 == 0 && z%5 == 0) {    
        n++ 
        console.log(z);   
    }
    if(n==3) {
        break
    }

}