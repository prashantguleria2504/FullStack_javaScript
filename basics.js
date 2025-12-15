
let val = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        val.push(i);   // push the number itself

        if(val.length === 3) {
            break
        }
    }
}
console.log(val);
