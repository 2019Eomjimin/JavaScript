// 생성자 함수 생성
// function Cylinder(cylinderDiameter, cylinderHeight) {
//     this.diamter = cylinderDiameter;
//     this.height = cylinderHeight;

//     // 부피 계산 메서드
//     this.volume = function() {
//         // 반지름
//         let radius = this.diamter / 2;
//         // 부피 계산 = 반지름 * 반지름 * pi * 높이
//         return (Math.PI * radius * radius * this.height).toFixed(2);
//     }
// }

class Cylinder{
    constructor(cylinderDiameter, cylinderHeight) {
        this.diamter = cylinderDiameter;    // 지름
        this.height = cylinderHeight;       // 높이
    }
}

// 버튼 가져오기
const btn = document.querySelector("button");

//결과 표시 영역 가져오기
const result = document.querySelector("#result");

// 버튼을 누르면 입력한 지름과 높이를 가지고 생성자 호출
btn.addEventListener("click", function(event) {
    event.preventDefault();

    // 지름 값 가져오기
    const diameter = parseFloat(document.getElementById("cyl-diameter").value);
    // 높이 값 가져오기
    const height = parseFloat(document.getElementById("cyl-height").value);
    // 객체 생성
    const cylinder = new Cylinder(diameter, height);

    if (diameter === "" || height === "") {
        result.innerText = `지름값과 높이값을 입력하세요`;
    } else {
        let cylinder = new Cylinder(parseInt(diameter), parseInt(height));
        result.innerText = `원기둥의 부피는 ${cylinder.Volume().toFixed(2)}입니다`;
    }
});