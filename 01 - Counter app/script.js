const count = document.getElementById("count");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
let currentCount = 0;


increase.addEventListener("click", function(){
    currentCount++;
    count.innerText = currentCount;
});

decrease.addEventListener("click", function(){
    currentCount--;
    count.innerText = currentCount;
});