import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.use((req, res, next) => {
  console.log("Request -", "Method:", req.method, " ", "URL:", req.url);
  next();
});

app.get("/api/users/hello", (req, res, next) => {
  res.send("BAREV");
});

app.listen(process.env.AUTH_PORT, () => {
  console.log("AUTH SERVICE: Listening on port " + process.env.AUTH_PORT);
});
