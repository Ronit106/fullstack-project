const clickme =document.getElementById("click");
const box = document.getElementById("mybox");
const bodyy = document.querySelector("body")
let colors = ["red","pink","blue","purple","grey"];

clickme.addEventListener("click", function()  {
let randomnum = Math.random();
let mysmtnum = randomnum*5
let wholenum = Math.floor(mysmtnum);
let mycolors = colors[wholenum];
bodyy.style.backgroundColor=mycolors;
console.log(mycolors);

});