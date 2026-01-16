/////////////////////////////
/// Homework Part 1 – Fetch Tasks (GET)
/////////////////////////////

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

async function loadTasksFromApi(){
    try{
        const response = await fetch(API_URL);

        if(!response.ok){
            throw new Error("Error to fetch");
        }

        // Parse data to JSON
        const data = await response.json()

        tasks = data.map(item =>({
            userId : item.userId,
            title : item.title,
            complete: item.completed
        }));

        renderTasks();

    } catch (error){
        console.error("Error " , error)
    }
} 

function renderTasks(){
    const taskList = document.getElementById("taskList")
    taskList.inner = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.title;

        if(task.completed){
            li.classList.add("completed");
        }

        taskList.appendChild(li);
        
    });   
}

document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromApi();
});

