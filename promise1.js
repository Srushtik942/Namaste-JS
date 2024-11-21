const cart = ["shoes","pants","kurta"];

//async op
//consuming part
const promise = createOrder(cart);


promise.then(function (orderId){

    // proceedToPayment(orderId);
    console.log(orderId);
});


promise.catch(function(err){
    console.log(err.message);

})
//producing part
///
function createOrder(cart){

    //creating a promise using new function
    const pr = new Promise(function(resolve,reject){
      //create an order
      //validate cart


      if(!validateCart(cart)){

        const err = new Error("Cart is not valid!");
        reject(err);
      }

      //logic for createOrder

      const orderId = "12345";
      if(orderId){
        setTimeout(function (){
            resolve(orderId);
      },5000);
        // resolve(orderId);
      }

    });


    return pr;


}


function validateCart(cart){
    // return true;

    //rejecting promise
    return false;
}


//Promise Chaining

