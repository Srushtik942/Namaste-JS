// lexical environment
// local memory + lexcial enviornment of its parent
// lexcial environemnt and its parent chian
function a(){
    c();
    function c(){
       console.log(b);
    }
}
var b =10;
a();