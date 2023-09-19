const num = [1,3,4,6,8,11,12,23,24];
let i;
let element

//반복문 for로 배열에서 10보다 큰 값 출력하기
for (i = 0; i < num.length; i++) {
    if (num[i] > 10) {
        document.write(num[i]+`,\n`);
    }
}
document.write(`<br><br>`);

//반복문 forEach로 배열에서 10보다 큰 값 출력하기
num.forEach(function(element) {
    if(element > 10)
        {
            document.write(element + `,\n`)
        }
});
document.write(`<br><br>`);

//반복문 for..of로 배열에서 10보다 큰 값 출력하기
for(element of num) {
    if(element > 10)
        document.write(element+`,\n`)
    };