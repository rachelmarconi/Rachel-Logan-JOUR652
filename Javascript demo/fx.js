//javascript

let btn1=document.getElementById("firstButton");
let btn2=document.getElementById("secondButton");

btn1.addEventListener("click",toSecondPage);
btn2.addEventListener("click",toFirstPage);

function toSecondPage(){
	window.location.href="second.html";
}

function toFirstPage(){
	window.location.href="html-template.html";
}
