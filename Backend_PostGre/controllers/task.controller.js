const multer = require("multer");
const { getAllTasks, createTask } = require("../model/task.model");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

const getTasks = async (req, res) => {
  try {
    const { page = 1, limit = 5, sortBy = "id", order = "ASC" } = req.query;

    const { rows: tasks, total } = await getAllTasks(
      parseInt(page),
      parseInt(limit),
      sortBy,
      order,
    );
    const BASE_URL =
      process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;
    const formattedTasks = tasks.map((task) => ({
      ...task,
      task_image: task.task_image
        ? `${BASE_URL}/${task.task_image.replace(/\\/g, "/")}`
        : null,
    }));
    res.status(200).json({
      message: "Tasks fetched successfully.",
      data: formattedTasks,
      pagination: {
        totalItems: total,
        totalPages: Math.ceil(total / parseInt(limit)),
        currentPage: parseInt(page),
        itemsPerPage: parseInt(limit),
      },
    });
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

    const task = await createTask(
      task_name,
      task_type,
      task_description,
      task_image,
    );
    res.status(201).json({ message: "Task added successfully.", task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTasks, postTask, upload };
