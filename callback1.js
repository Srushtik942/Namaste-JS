// console.log("Namste");

// setTimeout(function(){
//     console.log("JavaScript");
// },5000);

// console.log("season 2");



const cart = ["shoes","pants","kurta"];
api.createOrder(cart,function(){
    api.payment()
})
