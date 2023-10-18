// 리스트를 클릭하면 해당 리스트 내용 삭제
// 리스트의 모든 항목 가져오기
const items = document.querySelectorAll("li");

for(let item of items) {
    // items중 하나 클릭시...
    item.addEventListener("click", function() {
    // 해당 항목을 해당 했을때 삭제됨
    //this.remove();    // 나 자신 삭제
    // this는 이벤트가 발생한 노드를 가리킴
    // 화살표 함수가 아닌 익명함수 사용(정해진 것임)

    // 부모 노드에서 삭제
    this.parentNode.removeChild(this);
});
}