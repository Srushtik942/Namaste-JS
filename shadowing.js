//illegal shadowing


// const a = 200;
// {
// const a = 20;
//     console.log(a);
// }

// console.log(a);


//legal shadowing

var a= 100;
{
    var a= 1000;
    console.log(a);
}
console.log(a);


