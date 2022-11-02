//DIV container
//input container
const inputContainer = document.createElement("div"); //header class inputContainer
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

//Input box & label
let userInput = document.createElement("input");
userInput.setAttribute("id", "newTaskInput");
userInput.classList.add("inputBox");
userInput.setAttribute("placeholder", "Enter new task here");
//let userLabel = document.createElement("label");
//userLabel.classList.add("label");
//userLabel.innerHTML = "What do you have to do today?";
//listContainer.appendChild(userLabel);
inputContainer.appendChild(userInput);

//Input button
let inputBtn = document.createElement("button");
inputBtn.setAttribute("type", "submit");
inputBtn.setAttribute("id", "newTaskSubmit");
inputBtn.setAttribute("value", "addTask");
inputBtn.innerHTML = "Add task";
inputContainer.appendChild(inputBtn);

class TaskItem {
    constructor(description, isCompleted) {
        this.description = description;
        this.isCompleted = isCompleted;
    }
} 

let task1 = new TaskItem("Make coffee", false);
let task2 = new TaskItem("Do dishes", false);
let task3 = new TaskItem("Walk the dog", false);
let task4 = new TaskItem("Finish hand-in assignment", false);

let list = [];

let ulTag = document.createElement("ul");
ulTag.classList.add("ulTag");

let listItemsCheckbox;
let listItemsDelete;

window.onload = function () { 
    let list = [task1, task2, task3, task4];
    for(let i=0; i<list.length; i++) { 
        let listItems = document.createElement("li"); 
        listItems.classList.add("tasks");
        listItems.innerText=list[i].description; 
        //let listItemsCheckbox = document.createElement("input"); ////////////////////////7
        let listItemsCheckbox = document.createElement("input");
        listItemsCheckbox.setAttribute("type", "checkbox");
        listItemsCheckbox.setAttribute("id", "checked");
        //listItemLabel = document.createElement("label");
        //listItemLabel.setAttribute("for", "checked");
        //let listItemsDelete = document.createElement("button"); /////////////////////////////
        let listItemsDelete = document.createElement("button");
        listItemsDelete.setAttribute("type", "button");
        listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>'
        listContainer.appendChild(ulTag);
        ulTag.appendChild(listItems);
        listItems.appendChild(listItemsCheckbox);
        //listItemsCheckbox.appendChild(listItemLabel);
        listItems.appendChild(listItemsDelete);
        //console.log(list[i]);
    }
}


//Userinput körs x flera gånger om man klickar på knappen, töm???
//Input value ////////////////////// Funkar inte!!!!!
inputBtn.addEventListener("click", saveUserInput);
function saveUserInput() {
    let inputValue = userInput.value;
    if (!inputValue) {
        alert("Please add a task");
        return;
    } else {
  let userTask = new TaskItem(inputValue, false);
  console.log(userTask);  
  list.push(userTask);
  for(let i=0;i<list.length;i++){
    let userInput= document.createElement("li");
    userInput.innerHTML = userTask.description;

    let listItemsCheckbox = document.createElement("input");
        listItemsCheckbox.setAttribute("type", "checkbox");
        listItemsCheckbox.setAttribute("id", "checked");

        let listItemsDelete = document.createElement("button");
        listItemsDelete.setAttribute("type", "button");
        listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>'

        ulTag.appendChild(userInput);
        userInput.appendChild(listItemsCheckbox);
        userInput.appendChild(listItemsDelete);
        inputValue="";
  }
    }
    
} 


//Delete to do
/*listItemsDelete.addEventListener("click", function() {
    item.remove()
 })*/






/*function deleteCheck(e){
    const item = e.target;
    //Delete
    if(item.classList[0] === "deleteBtn"){
        const todo = item.parentElement;
        todo.remove();
    }*/




