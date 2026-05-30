import express from "express";
import loginRouter from "../router.ts"
import authMiddleware from './authMiddleware.ts'
import redis from 'redis'
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
