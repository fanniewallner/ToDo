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

//Input box & label
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

class TaskItem {
    constructor(description, isCompleted) {
        this.description = description;
        this.isCompleted = isCompleted; //Används inte för att stryka li, men för att flytta till ny lista??
    }
} 

let task1 = new TaskItem("Make coffee", false);
let task2 = new TaskItem("Walk the dog", false);
let task3 = new TaskItem("Cry", false);
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
        listItemsCheckbox.addEventListener("click", function(event){
            const a = event.target.closest('input').checked;
            if(a)
            event.target.closest('li').style.textDecoration ='line-through'
            else
            event.target.closest('li').style.textDecoration ='none'
        })
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

        //DELETEFUNKTION FÖR HÅRDKODAD LISTA
        listItemsDelete.addEventListener("click", function() {
            listItems.remove()
        })
        //console.log(list[i]);
    }
}

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
            listItemsCheckbox.addEventListener("click", function(event){
                const a = event.target.closest('input').checked;
                if(a)
                event.target.closest('li').style.textDecoration ='line-through'
                else
                event.target.closest('li').style.textDecoration ='none'
            })

            let listItemsDelete = document.createElement("button");
            listItemsDelete.setAttribute("type", "button");
            listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>'

            ulTag.appendChild(userInput);
            userInput.appendChild(listItemsCheckbox);
            userInput.appendChild(listItemsDelete);

            //HÄR ÄR DELETEN FÖR NY INPUT
            listItemsDelete.addEventListener("click", function() {
                userInput.remove()
                })
            inputValue="";
        }
    }
} 


// //input container
// const inputContainer = document.createElement("div"); 
// inputContainer.classList.add("inputContainer");
// //listcontainer
// const listContainer = document.createElement("div");
// listContainer.classList.add("container");
// document.body.appendChild(inputContainer);
// document.body.appendChild(listContainer);

// //Title
// const listTitle = document.createElement("h2");
// listTitle.classList.add("title");
// listTitle.innerHTML = "What do you have planned for today?";
// inputContainer.appendChild(listTitle);

// //Input box & label
// let userInput = document.createElement("input");
// userInput.setAttribute("id", "newTaskInput");
// userInput.classList.add("inputBox");
// userInput.setAttribute("placeholder", "Enter new task here");
// inputContainer.appendChild(userInput);

// //Input button
// let inputBtn = document.createElement("button");
// inputBtn.setAttribute("type", "submit");
// inputBtn.setAttribute("id", "newTaskSubmit");
// inputBtn.setAttribute("value", "addTask");
// inputBtn.innerHTML = "Add task";
// inputContainer.appendChild(inputBtn);

// class TaskItem {
//     constructor(description, isCompleted) {
//         this.description = description;
//         this.isCompleted = isCompleted;
//     }
// } 

// let task1 = new TaskItem("Make coffee", false);
// let task2 = new TaskItem("Do dishes", false);
// let task3 = new TaskItem("Walk the dog", false);
// let task4 = new TaskItem("Finish hand-in assignment", false);

// let list = [];

// let ulTag = document.createElement("ul");
// ulTag.classList.add("ulTag");

// let listItemsCheckbox;
// let listItemsDelete;

// window.onload = function () { 
//     let list = [task1, task2, task3, task4];
//     for(let i=0; i<list.length; i++) { 
//         let listItems = document.createElement("li"); 
//         listItems.classList.add("tasks");
//         listItems.innerText=list[i].description; 
//         listItemsCheckbox = document.createElement("input");

//         listItemsCheckbox.setAttribute("type", "checkbox");
//         listItemsCheckbox.setAttribute("id", "checked");

//         listItemsCheckbox.setAttribute("name", "listItemCheckbox"); //////////////////////////////

//         listItemsDelete = document.createElement("button");
//         listItemsDelete.setAttribute("type", "button");
//         listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>'
//         listContainer.appendChild(ulTag);
//         ulTag.appendChild(listItems);
//         listItems.appendChild(listItemsCheckbox);
//         listItems.appendChild(listItemsDelete);
    
//     }
// }





// //Userinput körs x flera gånger om man klickar på knappen, töm???
// //Input value 
// inputBtn.addEventListener("click", saveUserInput);
// function saveUserInput() {
//     let inputValue = userInput.value;
//     if (!inputValue) {
//         alert("Please add a task");
//         return;
//     } else {
//   let userTask = new TaskItem(inputValue, false); 
//   list.push(userTask);
//   for(let i=0;i<list.length;i++){
//     let userInput= document.createElement("li");
//     userInput.innerHTML = userTask.description;

//     let listItemsCheckbox = document.createElement("input");
//         listItemsCheckbox.setAttribute("type", "checkbox");
//         listItemsCheckbox.setAttribute("id", "checked");

//         let listItemsDelete = document.createElement("button");
//         listItemsDelete.setAttribute("type", "button");
//         listItemsDelete.innerHTML = '<i class="fas fa-trash"></i>'

//         ulTag.appendChild(userInput);
//         userInput.appendChild(listItemsCheckbox);
//         userInput.appendChild(listItemsDelete);
//   }
//     }
    
// } 



// //Delete to do -------- target checkbox by name?
// const checkboxes =  document.getElementsByName('checkbox'); //////////////
// checkboxes.addEventListener('click', (event) => {
//     let checkboxes= document.querySelectorAll('input[name="listItemCheckbox"]:checked');
//     let output= [];
//     checkboxes.forEach((checkbox) => {
//         output.push(checkbox.value);
//         console.log(checkbox.value);
//     });
//     document.write("You have selected ", output);
// });  



