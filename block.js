
//but for a they are present in same scope since they have var
var a = 101;

//this b present in different scope
let b = 100;

const c = 200;
function x(){
    //compound statement
    var a = 10;
    //this b is present in different scope
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);

//here b and c are not in global scope thats why it will throw an error.
console.log(b);
console.log(c);
