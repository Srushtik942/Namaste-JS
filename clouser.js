// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a =100;
//    return y;
// }

// var z = x();
// console.log(z);

// z();


function z(){
    var b = 900;
    function x(){
        var a = 7;

        function y(){
            console.log(a,b);
            // var c =8
        }
        y();
    }
    x();
}
z();


// function z(){
//     var b= 9;
//     function x(){
//        console.log(b);
//     }
//     return x;
// }
//  z();