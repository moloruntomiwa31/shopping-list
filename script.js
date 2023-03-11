let inputEl = document.getElementById("shopping-items");
const addBtn = document.getElementById("add-btn");
const formEl = document.getElementById("form-el");
let delBtn = document.querySelector(".del-btn");
let edBtn = document.querySelector(".ed-btn");
const delAll = document.getElementById("del-all");
const formIn = document.getElementById("form-el").getElementsByTagName("input");
let tasks = [];
let userName = document.getElementById("username");

const taskStorage = JSON.parse(localStorage.getItem("tasks"));
if (taskStorage) {
    tasks = taskStorage;
    display();
}

addBtn.addEventListener("click", function(e) {
    if (inputEl.value != '') {
        e.preventDefault();
        tasks.push(inputEl.value);
        inputEl.value = '';
        display();
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
})
delAll.addEventListener("click", function() {
    tasks = [];
    formEl.innerHTML = '';
    localStorage.clear()
})

edBtn.addEventListener("click",  function(e) {
    e.preventDefault();
    document.querySelector(".keep").focus()
    
})

delBtn.addEventListener("click", function() {
    formEl.innerHTML = ''
})

function display() {
    let listitems = '';
    for (let i=0; i<tasks.length; i++) {
        // listitems += ` 
        // <div><input type="text" value="${tasks[i]}" class="keep">
        // <button class="del-btn"><img src="delete.png" width="10px"></button>
        // <button class="ed-btn"><img src="pen.png" width="10px"></button></div>
        // `
        listitems += `<div><input type="checkbox"> <label>${tasks[i]}</label></div>`
    }
    formEl.innerHTML = listitems;
}
  