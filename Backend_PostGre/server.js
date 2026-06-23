const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.route");

const app = express();
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use("/api", authRoutes);
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port: ${PORT}`);
});

module.exports = app;
