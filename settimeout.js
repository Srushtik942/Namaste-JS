console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

let start = new Date().getTime();
let end = start;
while(end< start + 10000){
end = new Date().getTime();
}

console.log("while expires!");