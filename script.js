let inputEl = document.getElementById("shopping-items");
const addBtn = document.getElementById("add-btn");
const formEl = document.getElementById("form-el");  
const delAll = document.getElementById("del-all");
const edBtn = document.getElementsByClassName("edit");
const content = document.querySelector(".list-items")
const err = document.getElementById("error");
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

addBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        err.style.display = "none"
        tasks.push(inputEl.value);
        inputEl.value = '';
        display();
        localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
        err.style.display = "block"
        err.innerText = "Cannot be left blank."
    }
})
delAll.addEventListener("click", function() {
    tasks = [];
    formEl.innerHTML = '';
    localStorage.clear()
})

edBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = document.querySelector(".item")
    input.focus()
    input.removeAttribute("readonly")
    input.addEventListener("blur", e => {
        input.innerHTML = e.target.value;
        display();
        localStorage.setItem("tasks", input.innerHTML);
    })
})

{/* <label>${tasks[i]}</label> */}
function display() {
    let listitems = '';
    for (let i=0; i<tasks.length; i++) {
        listitems += `<div class="list-items">
        <input type="checkbox"><input type="text" value="${tasks[i]} " readonly class="item">
        <button class="edit">Edit</button>
        </div>`
    }
    formEl.innerHTML = listitems;
}
  