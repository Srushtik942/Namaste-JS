function county(){
var counter =0;
return function countt(){
    counter++;
  console.log(counter);
}
}

var c = county();
c();