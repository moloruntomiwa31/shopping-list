let inputEl = document.getElementById("shopping-items");
const addBtn = document.getElementById("add-btn");
const formEl = document.getElementById("form-el");  
const delAll = document.getElementById("del-all");
const selAll = document.getElementById("sel-all");
const dselAll = document.getElementById("dsel-all");
const edBtn = document.getElementsByClassName("edit");
const content = document.getElementsByClassName("list-items")
const err = document.getElementById("error");
const itemNum = document.getElementById("items-num");
let tasks = [];

let nameInput = document.getElementById("username");
const username = localStorage.getItem("username");
nameInput.value = username;
nameInput.addEventListener("change", e => {
    nameInput.setAttribute("readonly", true)
    localStorage.setItem("username", e.target.value)
})

let numOfItems = 0;
// const number = localStorage.getItem("numofItems")
itemNum.innerText = `Items : ${numOfItems}`

const taskStorage = JSON.parse(localStorage.getItem("tasks"));
if (taskStorage) {
    tasks = taskStorage;
    display();
}

addBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
        numOfItems++;
        // localStorage.setItem("numofItems", numOfItems)
        itemNum.innerText = `Items : ${numOfItems}`
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
    numOfItems = 0;
    itemNum.innerText = `Items : ${numOfItems}`
    // localStorage.setItem("numofItems", numOfItems)
    tasks = [];
    formEl.innerHTML = '';
    localStorage.clear()
})
selAll.addEventListener("click", () => {
    const inputC  = document.getElementsByTagName("input");
    for (i=0; i<inputC.length; i++) {
        if (inputC[i].type == "checkbox") {
            if (inputC[i].name != "check") {
                inputC[i].checked = true;
            }
        }
    }
} )
// dselAll.addEventListener("click", () => {
//     const inputC  = document.getElementsByTagName("input");
//     for (i=0; i<inputC.length; i++) {
//         if (inputC[i].type == "checkbox") {
//             inputC[i].checked = false;
//         }
//     }
// } )

// edBtn.addEventListener("click", function(e) {
//     e.preventDefault()
//     const input = content.querySelector("input[type='text']")
//     input.removeAttribute("readonly")
//     input.focus()
//     input.addEventListener("blur", function(e) {
//         input.innerText = e.target.value;
//         display();
//         localStorage.setItem("tasks", input.innerText);
//     })
// })

{/* <label>${tasks[i]}</label> */}
function display() {
    let listitems = '';
    for (let i=0; i<tasks.length; i++) {
        listitems += `<div class="list-items">
        <input type="checkbox"><input type="text" value="${tasks[i]} " readonly class="item">
        </div>`
    }
            // <button class="edit" type='submit'>Edit</button>
    formEl.innerHTML = listitems;
}
  