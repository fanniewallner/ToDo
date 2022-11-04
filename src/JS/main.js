//input container
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");

//listcontainer
const listContainer = document.createElement("div");
listContainer.classList.add("container");
document.body.appendChild(inputContainer);
document.body.appendChild(listContainer);

//Title
const listTitle = document.createElement("h2");
listTitle.classList.add("title");
listTitle.innerHTML = "What do you have planned for today?";
inputContainer.appendChild(listTitle);

//Input box
let userInput = document.createElement("input");
userInput.setAttribute("id", "newTaskInput");
userInput.classList.add("inputBox");
userInput.setAttribute("placeholder", "Enter new task here");
inputContainer.appendChild(userInput);

//Input button
let inputBtn = document.createElement("button");
inputBtn.setAttribute("type", "submit");
inputBtn.setAttribute("id", "newTaskSubmit");
inputBtn.setAttribute("value", "addTask");
inputBtn.innerHTML = "Add task";
inputContainer.appendChild(inputBtn);

//Second list och containers for completed tasks
completedContainer = document.createElement("div");
completedContainer.classList.add("completedContainer");
document.body.appendChild(completedContainer);

completedTitle = document.createElement("h3");
completedTitle.innerHTML = "Completed tasks";
completedContainer.appendChild(completedTitle);

let ulTagDone = document.createElement("ul"); //
ulTagDone.classList.add("ulDone"); //
completedContainer.appendChild(ulTagDone); //

//New list for completed tasks
let newList = [];

//Create class
class TaskItem {
  constructor(description, isCompleted) {
    this.description = description;
    this.isCompleted = isCompleted;
  }
}

//Hårdkodad lista
let task1 = new TaskItem("Make coffee", false);
let task2 = new TaskItem("Walk the dog", false);
let task3 = new TaskItem("Cry", false);
let task4 = new TaskItem("Finish hand-in assignment", false);

let list = [];

let ulTag = document.createElement("ul");
ulTag.classList.add("ulTag");

let listItemsCheckbox;
let listItemsDelete;

function createHTML() {
  ulTag.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let checkedList = list[i];
    let listItems = document.createElement("li");
    listItems.classList.add("tasks");
    listItems.innerText = list[i].description;
    let listItemsCheckbox = document.createElement("input");
    listItemsCheckbox.setAttribute("type", "checkbox");
    listItemsCheckbox.setAttribute("id", "checked");
    listItemsCheckbox.checked = checkedList.isCompleted;
    listItemsCheckbox.addEventListener("change", (event) => {
      let a = event.target.closest("input").checked;
      if (a) event.target.closest("li").style.textDecoration = "line-through";
      else event.target.closest("li").style.textDecoration = "none";
      moveToCompletedTasks(checkedList);
    });

    let listItemsDelete = document.createElement("button");
    listItemsDelete.setAttribute("type", "button");
    listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>';
    listContainer.appendChild(ulTag);
    ulTag.appendChild(listItems);
    listItems.appendChild(listItemsCheckbox);
    listItems.appendChild(listItemsDelete);

    //DELETEFUNKTION
    listItemsDelete.addEventListener("click", function () {
      list.splice(i, 1);
      createHTML();
    });
  }
}

///FLYTTA FUNKTION
function moveTask() {
  ulTag.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let checkedList = list[i];
    let listItems = document.createElement("li");
    listItems.classList.add("tasks");
    listItems.innerText = list[i].description;
    let listItemsCheckbox = document.createElement("input");
    listItemsCheckbox.setAttribute("type", "checkbox");
    listItemsCheckbox.setAttribute("id", "checked");
    listItemsCheckbox.checked = checkedList.isCompleted;
    listItemsCheckbox.addEventListener("change", (event) => {
      let a = event.target.closest("input").checked;
      if (a) event.target.closest("li").style.textDecoration = "line-through";
      else event.target.closest("li").style.textDecoration = "none";
      moveToCompletedTasks(checkedList);
    });

    let listItemsDelete = document.createElement("button");
    listItemsDelete.setAttribute("type", "button");
    listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>';
    completedContainer.appendChild(ulTagDone);
    ulTagDone.appendChild(listItems);
    listItems.appendChild(listItemsCheckbox);
    listItems.appendChild(listItemsDelete);

    //DELETEFUNKTION
    listItemsDelete.addEventListener("click", function () {
      list.splice(i, 1);
      createHTML();
    });
  }
}

window.onload = function () {
  list = [task1, task2, task3, task4];
  createHTML();
};

//Add tasks
inputBtn.addEventListener("click", saveUserInput);
function saveUserInput() {
  let inputValue = userInput.value;
  if (!inputValue) {
    alert("Please add a task");
    return;
  } else {
    let userTask = new TaskItem(inputValue, false);
    list.push(userTask);
    createHTML();
  }
}

//FUNKTION FÖR ATT FLYTTA COMPLETED TASKS
function moveToCompletedTasks(checkedList) {
  ulTagDone.innerHTML = "";
  console.log(list.isCompleted);
  checkedList.isCompleted = !checkedList.isCompleted;
  moveTask();
}
