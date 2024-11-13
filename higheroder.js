//here X is the callback function and y is the higher order function


// function x(){
//     console.log("Hello!");
// }

// function y(x){
//     x();
// }

//Functional programming





const radius = [2,3,4,1];

const area = function(radius){
    return Math.PI*radius*radius;

};

const circumefrence = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2 * radius;
}

Array.prototype.calculate =  function (logic){
    const op = [];
    for(let i=0;i<this.length;i++){
        op.push(logic(this[i]));
    }
    return op;
};

console.log(radius.map(area));


console.log(radius.calculate(area));

console.log(radius.calculate(diameter));
// console.log(calculate(radius,circumefrence));












