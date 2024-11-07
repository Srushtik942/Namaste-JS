const arr = [5,1,3,2,6];

//sum or max number in array

function findmax(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
return max;
}

console.log(findmax(arr));


const op = arr.reduce(function(max,curr){

    if(curr>max){
        max = curr;
    }
    return max;

},0)

console.log(op);