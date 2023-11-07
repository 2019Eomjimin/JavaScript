// 클래스 생성
class Pet {
    // 프로퍼티 생성
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    // 메서드
    run() {
        document.write(`<h1>${this.color} ${this.name}이가 달린다.</h1>`);
    }
}

const pet1 =new Pet("바둑이", "하얀");
pet1.run();


// 기존 클래스를 확장하여(상속받아) 새로운 클래스 선언
class Cat extends Pet {
    constructor(name, color, breed) {
        super(name,color);// 상위 클래스의 프로퍼티 재상용
        this.breed = breed;     // 새로운 프로퍼티 정의
    }
    // 새로운 메서드 정의
    viewInfo() {
        document.write(`<h1>이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}`);
    }
}

// 객체 생성
const bori = new Cat("보리", "흰색", "페르시안 친칠라");
bori.viewInfo();
bori.run();