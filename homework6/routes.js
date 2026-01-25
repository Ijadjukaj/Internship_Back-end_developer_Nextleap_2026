const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const dataFilePath = path.join(__dirname, "data", "tasks.json");

router.get("/file-tasks", async (req, res) => {
  try {
    const content = await fs.promises.readFile(dataFilePath, "utf-8");
    const tasksFromFile = JSON.parse(content);
    res.json(tasksFromFile);
  } catch (error) {
    console.error("Error reading tasks from file:", error);
    res.status(500).json({ error: "Could not read tasks from file" });
  }
});

module.exports = router;
