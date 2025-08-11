import express from "express";
import cors from "cors"; // ✅ Add this

const app = express();
const port = 3001;

app.use(cors()); // ✅ Allow all origins
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send("Title is required");

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index === -1) return res.status(404).send("Task not found");

  tasks.splice(index, 1);
  res.status(200).json({ message: "Task deleted successfully" });
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
