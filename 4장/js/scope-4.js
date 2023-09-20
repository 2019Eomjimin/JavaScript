const factor = 5;

    function calc(){
        return num * factor; // 오류 발생. num is not define
    }

    {
        const num = 10; 
        let result = calc(); // 함수 호출.
        console.log(`result : ${result}`);
    }