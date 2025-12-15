// declaration of an Array

let marks = Array(6)  // variable marks hold 6 values. Not initializing.
new Array(10,20,30,40,50,60)  // initialised.

var markArr = [10,20,30,40,25]
console.log("Accessing value from an array using index : " + markArr[1]);

markArr[3] = 14        // updating value in an array.
console.log(markArr);  // updated array
console.log("length of an array : " + markArr.length);

markArr.push(22)
console.log("Add new element at the end of an Array - PUSH : " + markArr);

markArr.pop()
console.log("Remove last element in an array -  POP : " + markArr);

markArr.unshift(7)
console.log("Insert element at the start an array -  UNSHIFT : " + markArr);

markArr.shift()
console.log("Removes first element of an array -  SHIFT : " + markArr);


console.log("---------------------------------------------------------------------------------------------");

let a1 = [];   // Empty array.
let a2 = [1,2,3,4,5];    // Array with numbers
let a3 = ["apple","banana","orange"];  // Array with Strings.

let lan = ["Java", "JS", "Python"];

// 1. Push method : Appends new elements to the end of an array, and returns the new length of the array.
    lan.push("Oracle", "c++");     
    console.log(lan);

 // 2. POP : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
 // .pop() removes the last element from an array and modifies the original array.
    lan.pop();   
    console.log("POP" + " : " +  lan);

 // 3. SHIFT : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

    let fruit = ["apple", "banana", "mango", "grapes"];
    fruit.shift();    
    console.log("Shift" + " : " + fruit);

    let firstfruit = fruit.shift();
    console.log(firstfruit);

 // 4. UNSHIFT :  Inserts new elements at the start of an array, and returns the new length of the array. 
    
    let juice = ["apple", "banana", "mango", "grapes"];
    juice.unshift("pineapple");
    console.log(juice);

    juice.unshift("cucumber", "chicoo");
    console.log(juice);
    
    console.log(juice.length);

// 5. SPLICE : Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.   
// array.splice(start, deleteCount, item1, item2, …)
    let animal = ["dog", "cat", "lion", "deer", "tiger", "bull", "cow"];
    animal.splice(1,2, "beer", "crow");    
    console.log(animal);

// 6. SLICE : Returns a copy of a section of an array. For both start and end,  
// .slice(0, -1) creates a new array without modifying the original one.        array.slice(start, end)
    let arr = [1,2,3,4,5,6,7,8,9,0]; 
    let newarr = arr.slice(0,-1);   
    console.log("Slice : " + newarr);

// 7. CONCAT : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
    let con = [1,2,3,4,5];
    let con2 = ["Apple", "Orange", "Mango"];
    let con3 = ["grapes", "banana", "pineapple"];
    let newcon = con.concat(con2,con3);
    console.log(newcon);

// 8. indexOf :   Returns the index of the first occurrence of a value in an array, or -1 if it is not present.  indexOf(searchElement, fromIndex)
    let ind = [1,2,4,6,7,7,7,8,9,6,9,0,7];
    let indpos = ind.indexOf(3);
    console.log(indpos);
    let indpos2 = ind.indexOf(6,ind.indexOf(6)+2);
    console.log(indpos2);

    let col = ["red", "yellow", "black", "red"];
    console.log(col.indexOf("red"));
    console.log(col.indexOf("red", 2));
    console.log(col.indexOf("red", col.indexOf("red") + 1));
    

// 9. include: Determines whether an array includes a certain element, returning true or false as appropriate.
    let role = ["admin", "user", "dev", "archi", "test"];  
    let flag = role.includes("seller");  
    console.log(flag);

// 10. forEach: Performs the specified action for each element in an array.
// It iterates over each element of the array and executes the provided callback function once per element.
let pop = [1,2,4,6,5];
pop.forEach((e) => {
    console.log(e);
    
});



    
    


    
    
    

    
    
    