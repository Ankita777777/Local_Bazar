const express = require("express");

const app = express();
const PORT = 5000;

// Hello World API
app.get("/", (req, res) => {
  res.send("Hello World 🌍");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
