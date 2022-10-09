import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/robots.txt", (req, res) => {
  res.sendFile(__dirname + "/robots.txt");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server started successfully on port ${port}!`);
});
