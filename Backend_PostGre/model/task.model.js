const pool = require("../config/db");

const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};

const createTask = async (task_name, task_type, task_description, task_image) => {
  const result = await pool.query(
    "INSERT INTO tasks (task_name, task_type, task_description, task_image) VALUES ($1, $2, $3, $4) RETURNING *",
    [task_name, task_type, task_description, task_image]
  );
  return result.rows[0];
};

module.exports = { getAllTasks, createTask };
