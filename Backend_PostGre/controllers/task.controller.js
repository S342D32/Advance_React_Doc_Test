const multer = require("multer");
const { getAllTasks, createTask } = require("../model/task.model");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

const getTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;
    const formattedTasks = tasks.map((task) => ({
      ...task,
      task_image: task.task_image
        ? `${BASE_URL}/${task.task_image.replace(/\\/g, "/")}`
        : null,
    }));
    res.status(200).json({ message: "Tasks fetched successfully.", tasks: formattedTasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postTask = async (req, res) => {
  try {
    const { task_name, task_type, task_description } = req.body;
    const task_image = req.file ? req.file.path.replace(/\\/g, "/") : null;

    if (!task_name || !task_type || !task_description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const task = await createTask(task_name, task_type, task_description, task_image);
    res.status(201).json({ message: "Task added successfully.", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTasks, postTask, upload };
