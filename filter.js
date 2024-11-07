const arr = [5,1,2,3,4];


const op = arr.filter(function greaterThan4(x){
    return x <4;
});

// function greaterThan4(x){
//     return x <4;
// };


console.log(op);