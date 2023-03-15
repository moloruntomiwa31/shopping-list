let inputEl = document.getElementById("shopping-items");
const addBtn = document.getElementById("add-btn");
const formEl = document.getElementById("form-el");  
const delAll = document.getElementById("del-all");
const edBtn = document.getElementsByClassName("edit");
const content = document.querySelector(".list-items")
let tasks = [];

let nameInput = document.getElementById("username");
const username = localStorage.getItem("username");
nameInput.value = username;
nameInput.addEventListener("change", e => {
    nameInput.setAttribute("readonly", true)
    localStorage.setItem("username", e.target.value)
})


const taskStorage = JSON.parse(localStorage.getItem("tasks"));
if (taskStorage) {
    tasks = taskStorage;
    display();
}

addBtn.addEventListener("click", function(e) {
    if (inputEl.value != "") {
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

edBtn.addEventListener("click", e => {
    e.preventDefault()
    const input = content.querySelector("label")
    input.focus()
    input.addEventListener("blur", e => {
        input.innerHTML = e.target.value
        localStorage.setItem("tasks", JSON.stringify(tasks))
        display()
    })
})

function display() {
    let listitems = '';
    for (let i=0; i<tasks.length; i++) {
        listitems += `<div class="list-items">
        <input type="checkbox"> <label>${tasks[i]}</label>
        <button class="edit">Edit</button>
        </div>`
    }
    formEl.innerHTML = listitems;
}
  