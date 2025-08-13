// import express from "express";
// import cors from "cors"; // ✅ Add this

// const app = express();
// const port = 3001;

// app.use(cors()); // ✅ Allow all origins
// app.use(express.json());

// let tasks = [];

// app.get("/tasks", (req, res) => {
//   res.json(tasks);
// });

// app.post("/tasks", (req, res) => {
//   const { title } = req.body;
//   if (!title) return res.status(400).send("Title is required");

//   const newTask = {
//     id: Date.now(),
//     title,
//     completed: false,
//   };
//   tasks.push(newTask);
//   res.status(201).json(newTask);
// });

// app.delete("/tasks/:id", (req, res) => {
//   const { id } = req.params;
//   const index = tasks.findIndex(task => task.id === parseInt(id));
//   if (index === -1) return res.status(404).send("Task not found");

//   tasks.splice(index, 1);
//   res.status(200).json({ message: "Task deleted successfully" });
// });

// app.listen(port, () => {
//   console.log(`✅ Server running at http://localhost:${port}`);
// });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Task from "./models/task.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/TaskWork")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add new task
app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).send("Title is required");
    const newTask = await Task.create({ title });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send("Task not found");
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
