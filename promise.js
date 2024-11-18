// const cart = ["shoes","pants","Kurta"];

// createOrderApi(cart ,function(){
//     proceedToPayment(orderId);

// }); //orderId will return


// instead of passing callback function into another we can use promises


// const promise = createOrderApi(cart);

// promise is empty object with data value

// {data: undefined}

// promise.then(function(){
//     proceedToPayment(orderId);

// });


const GitHub_API ="https://api.github.com/users/Srushtik942";

//fetch returns promise
const user = fetch(GitHub_API);