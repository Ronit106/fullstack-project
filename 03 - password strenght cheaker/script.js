const card = document.querySelector("card");
const input = document.getElementById("textbox");
const submit = document.getElementById("clickme");

submit.addEventListener("click", function (){
let resulthere = document.getElementById("result");
let userpass = input.value;
let userpasslenght = userpass.length;

if (userpasslenght >=8 ) {
    
    resulthere.innerText = "Strong ✅"

}
else {
    resulthere.innerText = "Weak ❌"
}
});


