const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});


const tasks = [
  { id: 1, title: "Learn Express basics", completed: false },
  { id: 2, title: "Build first API route", completed: false },
  { id: 3, title: "Test API in browser", completed: true },
];

// Home route 
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API");
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Tasks route
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Info route
app.get("/info", (req, res) => {
  res.json({
    appName: "Task Manager",
    version: "1.0",
    author: "Ijad Jukaj",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
