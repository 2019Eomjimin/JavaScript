function sum(num1, num2){
    var result = num1 + num2; //result is region function(region scope)
}

sum(10,20);
console.log(result); //region scope //error result is not define
