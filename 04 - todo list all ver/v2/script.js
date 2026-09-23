const box = document.querySelector("#card");
const userinput = document.getElementById("input");
const addclick = document.getElementById("addBtn");
let count = document.getElementById("taskCount");
let todoCount = 0;
const clearAll = document.getElementById("clearBtn");


//Dark mode

const Darkbtn = document.getElementById("darkbtn");
const body = document.querySelector("body")

Darkbtn.addEventListener("click", function(){

body.classList.toggle("dark")


})


//Whole search Func
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let alltask = document.querySelectorAll(".task");

for ( let i = 0 ;i < alltask.length ;i++)
{
    let paratask = alltask[i].querySelector("p");
    let lowerpara = paratask.innerText.toLowerCase();
    let lowersearch = search.value.toLowerCase();

    if (lowerpara.includes(lowersearch))
    {
        alltask[i].style.display = "flex";
    }
    else 
    {
        alltask[i].style.display = "none";
    }
} 
});

//for filter

const comBtn = document.getElementById("Completed");
const activebtn = document.getElementById("Active");
const Allbtn = document.getElementById("All");

function filterTasks(mode){

   let alltask = document.querySelectorAll(".task");

   for ( let i = 0;i < alltask.length; i++) {

    let taskcheckbox = alltask[i].querySelector("input")
    
    if(mode === "completed" && taskcheckbox.checked){
        alltask[i].style.display = "flex";
    }
     else if (mode === "Active" && !taskcheckbox.checked){
        alltask[i].style.display = "flex";
    }
     else if (mode === "ALL"){
        alltask[i].style.display = "flex";
    }
     else {
        alltask[i].style.display = "none";
    }
   
 }
}

comBtn.addEventListener("click", function(){
    filterTasks("completed");
});

activebtn.addEventListener("click", function(){
    filterTasks("Active");
})

Allbtn.addEventListener("click", function(){
    filterTasks("ALL")
})







// Add event listener for Enter key press
userinput.addEventListener("keydown", function (event){
if (event.key === "Enter") {
    addclick.click();
}
});



// Add event listener for Add button click
addclick.addEventListener("click", function (){


// Create a new div for the task
let newdiv = document.createElement("div");
newdiv.className = "task";

if (userinput.value.trim() === "") {
    alert("Please enter a task");
    return;
}
todoCount++;
count.innerText = "Total tasks: " + todoCount;

// Create a checkbox for the task
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.style.marginLeft = "10px";
newdiv.appendChild(checkbox);


// Create a paragraph element for the task text
let para = document.createElement("p");
para.innerText = userinput.value;
newdiv.appendChild(para);



// Create an Edit button for the task
let edit = document.createElement("button");
edit.innerText = "Edit";
edit.style.marginLeft = "10px";
newdiv.appendChild(edit);


// Create a Remove button for the task
let clear = document.createElement("button");
clear.innerText = "Remove";
clear.style.marginLeft = "10px";
newdiv.appendChild(clear);

//conect the newdiv to the box
box.appendChild(newdiv);



// Add event listener for Remove button click
clear.addEventListener("click", function (){

     box.removeChild(newdiv);   
    todoCount--;
    count.innerText = "Total tasks: " + todoCount;
    
    });

// Add event listener for Edit button click
    edit.addEventListener("click", function (){
        let newtext = prompt("Enter new text");
        if (newtext === null || newtext.trim() === "") {
            alert("Please enter a valid task");
            return;
        }
        else {
        para.innerText = newtext;}
    });






// Clear the input field and focus on it
userinput.value = "";
// Focus on the input field
userinput.focus();

// Add event listener for checkbox change
checkbox.addEventListener("change", function () {  
if (checkbox.checked) {
    para.style.textDecoration = "line-through";
   }
    else {
        para.style.textDecoration = "none";
    }

});

});
    

clearAll.addEventListener("click", function () { 
const clearthis = document.querySelectorAll(".task");

for (let i = 0 ; i < clearthis.length; i++) {
    box.removeChild(clearthis[i]);
    todoCount = 0;
count.innerText = "Total tasks: " + todoCount;
};


});