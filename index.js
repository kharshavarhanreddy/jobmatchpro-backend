const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/healthz", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/jobs", (req, res) => {
  res.json([
    { title: "Frontend Developer", company: "Google", url: "https://careers.google.com" },
    { title: "Junior Software Engineer", company: "Amazon", url: "https://www.amazon.jobs" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
