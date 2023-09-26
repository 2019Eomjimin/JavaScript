/*//변수 할당하기
let sum = (a, b) => a + b;
sum(2, 10);

function add(a, b){
    return a + b;
}

let sum = add;
sum(2,10);
*/

let init = () => {
    return function(a, b) {
        return a - b > 0 > a - b : b - a;
    }
}

console.log(`init(30, 20) : ${init(30, 20)}`);
console.log(`init()(30, 20) : ${init(10, 20)}`);