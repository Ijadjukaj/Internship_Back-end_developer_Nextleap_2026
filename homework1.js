/////////////////////////////////////////
// Home Work - JavaScript 
/////////////////////////////////////////

///////////////////////
// Exercise 1: Variables & Types
///////////////////////
{
  let name = "Ijad";
  let age = 23;
  let likeJavaScript = true;

  console.log(
    "My name is " + name +
    ", I am " + age + " years old, and it is " +
    likeJavaScript + " that I like JavaScript."
  );

  name = "Ijad Jukaj";
  age = 24;
  likeJavaScript = false;

  console.log(
    "My name is " + name +
    ", I am " + age + " years old, and it is " +
    likeJavaScript + " that I like JavaScript."
  );
}

///////////////////////
// Exercise 2: Arrays & Objects
///////////////////////
{
  let favoriteFoods = ["Pizza", "Pasta", "Burger"];

  console.log("First food:", favoriteFoods[0]);
  console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);

  let student = {
    name: "Ijad",
    cohort: "Web Development",
    isActive: true
  };

  console.log(student);
  console.log("Name:", student.name);
  console.log("Cohort:", student.cohort);
  console.log("Is Active:", student.isActive);
}

///////////////////////
// Exercise 3: Functions
///////////////////////
{
  const squareRoot = (x) => x * x;
  console.log(squareRoot(5));
  console.log(squareRoot(2));
  console.log(squareRoot(10));

  let introduce = (my_name) => "My name is " + my_name;
  console.log(introduce("Ijad"));
}

///////////////////////
// Exercise 4: Loops
///////////////////////
{
  function printNumbersUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }

  function printEvenNumbersUpTo(n) {
    for (let i = 2; i <= n; i += 2) {
      console.log(i);
    }
  }

  printNumbersUpTo(5);
  printEvenNumbersUpTo(10);

  let numbers = [1, 4, 7, 10, 13];
  for (let num of numbers) {
    if (num % 2 === 0) {
      console.log(num + " is even");
    } else {
      console.log(num + " is odd");
    }
  }
}

///////////////////////
// Exercise 5: Task Manager (Add, Delete, Complete)
///////////////////////
{
  let tasks = [];

  function addTask(title) {
    let task = { title: title, completed: false };
    tasks.push(task);
    console.log("Added task:", title);
  }

  function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
      console.warn("Invalid index:", index);
      return;
    }
    let removed = tasks.splice(index, 1);
    console.log("Deleted task:", removed[0].title);
  }

  function completeTask(index) {
    if (index < 0 || index >= tasks.length) {
      console.warn("Invalid index:", index);
      return;
    }
    tasks[index].completed = true;
    console.log("Completed task:", tasks[index].title);
  }

  function countCompleted(tasksArray) {
    let count = 0;
    for (let task of tasksArray) {
      if (task.completed) count++;
    }
    return count;
  }

  addTask("Buy groceries");
  addTask("Clean the room");
  addTask("Do homework");
  addTask("Read a book");
  addTask("Exercise");

  console.log("Tasks now:", tasks);

  deleteTask(1);
  completeTask(2);

  console.log("Tasks after changes:", tasks);
  console.log("Completed tasks:", countCompleted(tasks));
}

///////////////////////
// Exercise 6: Optional Stretch – countCompleted(tasks)
///////////////////////
{
  let tasks_list = [
    { title: "Buy groceries", completed: false },
    { title: "Clean the room", completed: false },
    { title: "Do homework", completed: false },
    { title: "Read a book", completed: false },
    { title: "Exercise", completed: false }
  ];

  function completeTaskList(index) {
    if (index < 0 || index >= tasks_list.length) {
      console.warn("Invalid index:", index);
      return;
    }
    tasks_list[index].completed = true;
    console.log("Completed task:", tasks_list[index].title);
  }

  function deleteTaskList(index) {
    if (index < 0 || index >= tasks_list.length) {
      console.warn("Invalid index:", index);
      return;
    }
    const removed = tasks_list.splice(index, 1);
    console.log("Deleted task:", removed[0].title);
  }

  function countCompletedList() {
    let count = 0;
    for (let task of tasks_list) {
      if (task.completed) count++;
    }
    return count;
  }

  console.log("Initial tasks list:", tasks_list);

  completeTaskList(0);
  completeTaskList(2);
  deleteTaskList(1);

  console.log("Completed tasks in list:", countCompletedList());
  console.log("Final tasks list array:", tasks_list);
}
