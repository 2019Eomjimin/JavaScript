//제목 가져오기
const title = document.querySelector("#title")

//이름 가져오기
const userName = document.querySelector("#desc p");
//const userName = document.querySelectorAll("#desc .user");

//프로필 이미지 가져오기
const pfImg = document.querySelector("#profile img");

//제목 영역을 클릭하면 내용르 바꾼다.
title.onclick = () => title.InnerText = "프로필";
//이름 영역 클릭하면 이름만 찐하게 만들어라
userName.onclick = () => userName.innerHTML = "이름 : <b>엄지민</b>";
//이미지 영역을 클릭하면 이미지를 바꾼다.(이미지 경로)
pfImg.onclick = () => pfImg.src="imgs/pf2.png";