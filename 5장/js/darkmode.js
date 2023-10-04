const tbbtn = document.querySelector("#toggle-box button");

tbbtn.onclick = function() {
    document.body.classList.toggle("dark");
}