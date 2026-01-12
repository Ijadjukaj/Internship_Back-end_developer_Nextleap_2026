//////////////////////
// Part 1 - Wire JavaScript to HTML 
/////////////////////

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

//////////////////////
// Part 2 - Render tasks from array
/////////////////////

//Task Array
let tasks = [];

//Function to add task in tasks Array
const addTask = (title)=>{
    const task = {
        title:title,
        completed: false
    };
    tasks.push(task);
}

//Function to delete task in tasks Array
const deleteTask = (index)=> tasks.splice(index,1);

//Function to render task
function renderTasks(){ taskList.innerHTML=""; //clear the list

// Create a list element before ul and checkboxes
tasks.forEach((task,index)=>{
    const li = document.createElement("li");


// Create checkbox from javascript
const checkbox = document.createElement("input") // checkbox is input type checkbox
checkbox.type = "checkbox"; // we set the checkbox type to the input element 
checkbox.checked = task.completed; //return boolean true if the checkbox is checked

//update the state of checkbox every time is checked or not
checkbox.addEventListener("change",()=>{
    task.completed = checkbox.checked; // return either true or false if it's checked or not
    renderTasks(); //refreshes the page
});

//Task text
const span = document.createElement("span");
span.textContent = task.title;

if (task.completed){
    li.classList.add("completed");
}

// Delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click", ()=>{
    deleteTask(index);
    renderTasks();
    console.log(tasks);
});

// add checkbox, span, delete button and a list element for each input value
li.appendChild(checkbox)
li.appendChild(span)
li.appendChild(deleteBtn);

taskList.appendChild(li);
});

}

//////////////////////
// Part 3 - Form Submit
/////////////////////

//submit the value to html
taskForm.addEventListener("submit", function (){
    event.preventDefault(); //Do not reload the web browser

    const title = taskInput.value.trim(); //filter the value by removing the extra spaces at the star and the end of input

    if (title === ""){ //if its nothing typed then don't return anything
        return;
    }

    addTask(title); 
    renderTasks();
    taskInput.value=""; //clears input field after rendering
})


