//섭씨 온도 = (화씨온도 - 32) / 1.8
//프롬프트로 화씨 온도 입력 받는다.
//출력은 alert() 또는 document.write() 중 하나 선택.
//화씨 온도 00도는 섭씨 온도 00도 입니다.

//화씨 온도 입력
let fah = parseFloat(prompt("화씨 온도를 입력하세요:"));

// 화씨 온도를 섭씨 온도로 변환
let cel = (fah - 32) / 1.8;

// 결과를 알림창으로 출력
alert(`화씨 온도 ${fah}도는 섭씨 온도 ${cel.toFixed(1)}도 입니다.`);
document.write(`화씨 온도 ${fah}도는 섭씨 온도 ${cel.toFixed(1)}도 입니다.`);