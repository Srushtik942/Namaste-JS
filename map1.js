const user =[
    {firstName: "Srushti", lastName: "Kulkarni", age: 23},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Narendra", lastName: "Modi", age: 75},
    {firstName: "Deepika", lastName: "Padukon", age: 23},



];


//list of full names all the user

const op = user.map(x=>x.firstName + " " + x.lastName);

console.log(op);


//how many people with age
//we have to use reduce here

const op1 = user.reduce(function(acc,curr){

    if(acc[curr.age]){
        acc[curr.age]++;

    }else{

        acc[curr.age]=1

    }
return acc;

},{});

console.log(op1);


//filter function
//if we want op of the name who's age is less than 30

const op2 = user.filter(x=>x.age<30).map((x)=>x.firstName);

console.log(op2);

const op3 = user.reduce(function(acc,curr){
    if(curr.age<30){
      acc.push(curr.firstName);
    }
    return acc;
},[]);

console.log(op3);
