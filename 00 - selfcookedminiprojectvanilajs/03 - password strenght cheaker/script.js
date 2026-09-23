const bodyy = document.querySelector("body");
const box = document.getElementById("card");
let userpass = document.getElementById("pass");
const click = document.getElementById("clickme");


click.addEventListener("click",  function() {
let passresult = document.getElementById("result")
let userpass1 = userpass.value;
let passcount = userpass1.length;

if (passcount >= 8) {
    passresult.innerText = "STRONG"

}
else {

    passresult.innerText = "WEAK" 
}

    console.log(passcount);
})
