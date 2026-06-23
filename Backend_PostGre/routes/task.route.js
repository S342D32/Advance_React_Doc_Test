const express = require("express");
const router = express.Router();
const { getTasks, postTask, upload } = require("../controllers/task.controller");

router.get("/todos", getTasks);
router.post("/todos", upload.single("task_image"), postTask); // "task_image" = form field name

module.exports = router;
