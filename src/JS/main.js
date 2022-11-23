//input container
const inputContainer = document.createElement("div");
inputContainer.classList.add("inputContainer");

//listcontainer
const listContainer = document.createElement("div");
listContainer.classList.add("container");
document.body.appendChild(inputContainer);
document.body.appendChild(listContainer);

//incomplete title
incompletedTitle = document.createElement("h3");
incompletedTitle.innerHTML = "To do";
listContainer.appendChild(incompletedTitle);

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

//Sorticon
let sortIcon = document.createElement("i");
sortIcon.setAttribute("id", "sortIcon");
incompletedTitle.appendChild(sortIcon);
sortIcon.innerHTML = '<i class="fas fa-angle-double-down"></i>';

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

//Skapar klass
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

list = [];
list = [task1, task2, task3, task4];
/*list = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("LSList"))
  : [task1, task2, task3, task4]; /////////// LS get???????????????????*/
let ulTag = document.createElement("ul");
ulTag.classList.add("ulTag");

//Funktion som skapar HTML
function createHTML() {
  ulTag.innerHTML = ""; //Tömmer ulTag innan loop så att objekten av hårdkodade objekt inte dubbleras
  ulTagDone.innerHTML = ""; //Tömmer ulTagDone innan loopen så att objekten där i inte dubbleras
  for (let i = 0; i < list.length; i++) {
    let checkedList = list[i]; //ändra till currentobject ist för checkedlist
    listItems = document.createElement("li");
    listItems.classList.add("tasks");
    listItems.innerText = list[i].description; //Li:s innerText blir task på position i
    let listItemsCheckbox = document.createElement("input"); //Skapar input som ska bli checkbox
    listItemsCheckbox.setAttribute("type", "checkbox"); //Lägg till attribut på input så att det bnlir checkbox
    listItemsCheckbox.setAttribute("id", "checked"); //Lägger till id på checkbox
    localStorage.setItem("LSList", JSON.stringify(list));
    listItemsCheckbox.checked = checkedList.isCompleted;
    listItemsCheckbox.addEventListener("change", () => {
      //eventListener på checkbox, lyssnar efter change, triggar funktion movedToCompletedTasks
      moveToCompletedTasks(checkedList); //Skickar med objektet på pos i till funktionen moceToCompletedTasks
    });

    let listItemsDelete = document.createElement("button");
    listItemsDelete.setAttribute("type", "button");
    listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>';

    if (!checkedList.isCompleted) {
      //Om checkboxens värde är falsed ska den appendas till första div:en, dvs icke färdiga
      listContainer.appendChild(ulTag);
      ulTag.appendChild(listItems);
      listItems.appendChild(listItemsCheckbox);
      listItems.appendChild(listItemsDelete);
      localStorage.setItem("LSList", JSON.stringify(list));
    } else {
      completedContainer.appendChild(ulTagDone); //Om checkboxens värde inte är false, dvs true ska den appendas till den nedre div:en med färdiga tasks
      ulTagDone.appendChild(listItems);
      listItems.appendChild(listItemsCheckbox);
      listItems.appendChild(listItemsDelete);
      localStorage.setItem("LSList", JSON.stringify(list));
    }

    //Funktion som tar bort todos
    listItemsDelete.addEventListener("click", function () {
      list.splice(i, 1); //ställer sig på listan på position i och tar bort 1
      createHTML();
    });
  }
}

//Funktion som displayar vår hårdkodade lista
window.onload = function () {
  list = [task1, task2, task3, task4];
  localStorage.setItem("LSList", JSON.stringify(list));
  /*localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("LSList"))
    : []; /////////// LS get???????????????????*/
  createHTML();
};

//Lägg till todos genom input
inputBtn.addEventListener("click", saveUserInput);
function saveUserInput() {
  let inputValue = userInput.value;
  if (!inputValue) {
    alert("Please add a task");
    return;
  } else {
    let userTask = new TaskItem(inputValue, false);
    list.push(userTask);
    localStorage.setItem("LSList", JSON.stringify(list));
    createHTML();
  }
}

//Funktion för att flytta färdigmarkerade todos
function moveToCompletedTasks(checkedList) {
  //checkedList är objektet på pos i i listan
  ulTagDone.innerHTML = "";
  checkedList.isCompleted = !checkedList.isCompleted; //Toggling checkbox
  localStorage.setItem("LSList", JSON.stringify(list));
  createHTML();
}

sortIcon.addEventListener("click", () => {
  let sortedList = list.sort(function (a, b) {
    const descriptionA = a.description.toUpperCase();
    const descriptionB = b.description.toUpperCase();
    if (descriptionA < descriptionB) {
      return -1;
    }
    if (descriptionA > descriptionB) {
      return 1;
    }
    return 0;
  });

  console.log(sortedList);
  createHTML();
});

/*function saveToLS(TaskItem) {
  let list = [task1, task2, task3, task4];
  if (localStorage.getItem("taskitems") === null) {
    list = [];
  } else {
    list = JSON.parse(localStorage.getItem("list"));
  }
  list.push(TaskItem);
  localStorage.setItem("list", JSON.stringify(list));
}*/
