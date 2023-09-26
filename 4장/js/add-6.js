//화살표 함수.
//매게 변수 2개인 함수
let sum = (a,b) => {
    let result = a + b;
    return result;
}

// 매게 변수가 없을때
let hi = () => {
    return `안녕하세요.`;
}

hi();   //함수 호출

//return 생략 가능.
let hi1 = () => { `안녕하세요.`;}

//매게 변수가 1개일때
let hi2 = user => {
    console.log(`${user}님 안녕하세요.`);
}
hi2("엄지민");