// 1. 정수를 입력 받는다.
// 2. 만약 정수가 3의 배수이면
//      1) 3의 배수입니다. 출력
// 3. 아니면
//      1) 3의 배수가 아닙니다. 출력

// 정수 입력
let number = parseInt(prompt("정수를 입력하세요"));

if(!isNaN(number))
{
    //3의 배수 true
    if(number % 3 === 0)
        {
            alert(`${number}는 3의 배수 입니다.`);
        }
    //3의 배수 false
    else
        {
            alert(`${number}는 3의 배수가 아닙니다.`)
        }
}
else
    {
        alert(`숫자를 입력하세요.`)
    }