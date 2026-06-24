const pool = require("../config/db");

const getAllTasks = async (
  page = 1,
  limit = 5,
  sortBy = "id",
  order = "ASC",
) => {
  const offset = (page - 1) * limit;

  const result = await pool.query(
    `SELECT * FROM tasks ORDER BY ${sortBy} ${order} LIMIT $1 OFFSET $2`,
    [limit, offset],
  );
 const totalResult = await pool.query("SELECT COUNT(*) FROM tasks");
  
  return {
    rows: result.rows,
    total: parseInt(totalResult.rows[0].count)
  };};

const createTask = async (
  task_name,
  task_type,
  task_description,
  task_image,
) => {
  const result = await pool.query(
    "INSERT INTO tasks (task_name, task_type, task_description, task_image) VALUES ($1, $2, $3, $4) RETURNING *",
    [task_name, task_type, task_description, task_image],
  );
  return result.rows[0];
};

module.exports = { getAllTasks, createTask };
