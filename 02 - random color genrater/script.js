const title = document.getElementById("Title");
const clickme = document.getElementById("press");
const boxy = document.getElementById("box");
const bodyy = document.querySelector("body");
let my5color = ["red", "blue", "green", "orange", "purple"];


clickme.addEventListener("click", function() {
let mynum = Math.random();
let a = mynum * 5 ;
let b = Math.floor(a);
let c = my5color[b];
bodyy.style.backgroundColor = c;
console.log(c);

});