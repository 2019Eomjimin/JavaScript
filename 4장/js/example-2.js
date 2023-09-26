// 두 수를 전달 받아 곱셈하는 함수 정의
let mul = (num1, num2) => {
    return num1 * num2;
}

// 두 정수 입력 받기
let num1 = parseInt(prompt("첫번째 정수 입력"));
let num2 = parseInt(prompt("두번째 정수 입력"));

// 함수 호출하여 결과 계산 및 결과 화면에 출력하기
document.write(`<h1> ${num1} * ${num2} = ${mul(num1, num2)} </h1>`);
