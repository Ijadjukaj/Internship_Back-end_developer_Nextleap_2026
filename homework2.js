/////////////////////////////////////////
// main-extended-homework.js
/////////////////////////////////////////

///////////////////////
// Homework Part 1 – Arrow Functions & Template Literals
///////////////////////
{
  console.log("=== Part 1: Arrow Functions & Template Literals ===");

  let tasks = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean the room", completed: true },
    { id: 3, title: "Do homework", completed: false }
  ];

  // Arrow function to get completed tasks
  const getCompletedTasks = (tasksArray) => tasksArray.filter(task => task.completed);

  // Arrow function to print all tasks nicely
  const printTasks = (tasksArray) => {
    tasksArray.forEach(task => {
      console.log(`Task "${task.title}" (id: ${task.id}) is ${task.completed ? "completed" : "incomplete"}`);
    });
  };

  console.log("All tasks:");
  printTasks(tasks);

  const completedTasks = getCompletedTasks(tasks);
  console.log("Completed tasks:");
  printTasks(completedTasks);
}

///////////////////////
// Homework Part 2 
///////////////////////
{
  console.log("\n=== Part 2: Immutability Challenge ===");

  let tasks = [];
  let nextId = 1;

  // Add task with optional estimatedMinutes
  const addTask = (title, estimatedMinutes = 25) => {
    const task = { id: nextId, 
                  title, 
                  completed: false, 
                  estimatedMinutes };
    nextId++;
    tasks.push(task);
    return task;
  };

  // Clone tasks 
  const cloneTasks = (tasksArray) => [...tasksArray];

  // Return new array with all tasks completed, without mutating original
  const getTasksWithAllCompleted = (tasksArray) => tasksArray.map(task => ({ ...task, completed: true }));

  // Add some tasks
  addTask("Task A", 30);
  addTask("Task B", 20);

  const tasksCopy = cloneTasks(tasks);
  const allCompletedVersion = getTasksWithAllCompleted(tasks);

  console.log("Original tasks:");
  console.log(tasks);
  console.log("Cloned tasks copy:");
  console.log(tasksCopy);
  console.log("All completed version:");
  console.log(allCompletedVersion);

  // Test immutability
  allCompletedVersion[0].title = "Changed Title";
  console.log("\nAfter modifying allCompletedVersion:");
  console.log("Original tasks (unchanged):", tasks);
  console.log("Modified allCompletedVersion:", allCompletedVersion);
}

///////////////////////
// Homework Part 3 – Task Statistics
///////////////////////
{
  console.log("\n=== Part 3: Task Statistics ===");

  let tasks = [];
  let nextId = 1;

  // Add task with optional estimatedMinutes
  const addTask = (title, estimatedMinutes = 25) => {
    const task = { id: nextId, 
                  title, 
                  completed: false, 
                  estimatedMinutes };
    nextId++;
    tasks.push(task);
    return task;
  };

  // Add some tasks with different estimatedMinutes
  addTask("Read book", 15);
  addTask("Write report", 40);
  addTask("Exercise", 30);

  // Pure function: sum estimatedMinutes
  const getTotalEstimatedMinutes = (tasksArray) => tasksArray.reduce((sum, task) => sum + task.estimatedMinutes, 0);

  // Pure function: average estimatedMinutes
  const getAverageEstimatedMinutes = (tasksArray) => {
    if (tasksArray.length === 0) return 0;
    return getTotalEstimatedMinutes(tasksArray) / tasksArray.length;
  };

  const total = getTotalEstimatedMinutes(tasks);
  const average = getAverageEstimatedMinutes(tasks);

  console.log(`Total estimated minutes: ${total}`);
  console.log(`Average estimated minutes: ${average}`);
}
