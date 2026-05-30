import express from "express";
import loginRouter from "../router.ts"
import authMiddleware from './authMiddleware.ts'



const app = express();


app.use(express.json())


app.get("/healthz",(req,res)=>{
  res.status(200).json({
     health : "ok" 
  }) 
})

app.use(loginRouter());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
