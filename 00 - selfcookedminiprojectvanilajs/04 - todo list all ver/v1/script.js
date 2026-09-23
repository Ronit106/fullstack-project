const bodyy = document.querySelector("body");
const box = document.getElementById("container");
const input = document.getElementById("taskInput");
const addtask = document.getElementById("addButton");
let taskno = document.getElementById("taskCount");
let taskcount = 0;
const clearbtn = document.getElementById("clearall")

let enterKey = input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addtask.click();
    }
});


addtask.addEventListener("click", function() {

let userInput = input.value;
if (userInput.trim() === "") {
    alert("Please enter a task.");
    return;
 }

taskcount++;
taskno.innerText = "Total tasks: " + taskcount;
 
//my newdiv inwhich the task is saved in memory of js
let taskItem = document.createElement("div");


//adding class to the newdiv , makes taskitem a class 
taskItem.classList.add("taskItem");


//creating checkbox for each task
 let checkbox = document.createElement("input");
 checkbox.type = "checkbox";
 taskItem.appendChild(checkbox);
 checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        para.style.textDecoration = "line-through";
    } else {
        para.style.textDecoration = "none";
    }   
});

 //creating a paragraph for each task
let para = document.createElement("p");
para.innerText = userInput;
taskItem.appendChild(para);

//creating edit button for each task
let editButton = document.createElement("button");
editButton.innerText = "Edit";
editButton.addEventListener("click", function() {
    let newtask = prompt("Edit your task:", para.innerText);
    if (newtask !== null && newtask.trim() !== "") {
        para.innerText = newtask;
    }
});
taskItem.appendChild(editButton);
 
//creating delete button for each task
let deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.addEventListener("click", function() {
    box.removeChild(taskItem);

    taskcount--;
    taskno.innerText = "Total tasks: " + taskcount;


});
taskItem.appendChild(deleteButton);

//clears the input box after userinput
input.value = "";

box.appendChild(taskItem);

//nuke all the task AND I DID IT WITH FOR LOOP
clearbtn.addEventListener("click", function() {
    box.removeChild(taskItem);
    taskcount = 0;
    taskno.innerText = "Total tasks: " + taskcount;

});

});


































































