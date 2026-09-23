const count = document.getElementById("count");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
let a = 0;

add.addEventListener("click",  function() {
    a++;
    count.innerText = a;
});

minus.addEventListener("click",  function() {
    a--;
    count.innerText = a;
});