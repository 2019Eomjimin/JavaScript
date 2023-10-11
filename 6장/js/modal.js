const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

//프로필 보기를 누르면 madal-box가 열리면서 내용이 보임
open.addEventListener("click", () => {
    modalBox.classList.toggle("active");
});

// x버튼을 누르면 프로필의 #modal-box가 닫힘
close.addEventListener("click", () => {
    modalBox.classList.remove("active");
});