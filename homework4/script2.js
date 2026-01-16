/////////////////////////////
/// Homework Part 2 – Handle Errors
/////////////////////////////

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
let tasks = [];

// Helper to show error messages in the UI
 
function setError(message) {
  const errorDiv = document.getElementById("error");
  errorDiv.textContent = message;
}

// Load tasks from API with error handling
 
function loadTasksFromApi() {
  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        
        throw new Error("Failed to fetch tasks. Status: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      tasks = data.map(item => ({
        id: item.id,
        title: item.title,
        completed: item.completed
      }));
      renderTasks();

      // Clear any previous errors
      setError("");
    })
    .catch(error => {
      console.error("Network or API error:", error);
      setError("Oops! Could not load tasks. Please try again later.");
    });
}


//Render tasks in the DOM
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;

    if (task.completed) {
      li.classList.add("completed");
    }

    taskList.appendChild(li);
  });
}

// Load tasks on page load
document.addEventListener("DOMContentLoaded", () => {
  loadTasksFromApi();
});
