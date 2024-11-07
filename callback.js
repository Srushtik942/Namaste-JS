//JS is a synchronuous single threaded language.

setTimeout(function(){

    console.log("timer")

},5000
);  //store it in seperate space
function x(y){
    console.log("x")
    y();
}

x(function y(){

console.log("y");

})



