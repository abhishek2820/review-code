import express from "express";
import loginRouter from "../router.ts"
import authMiddleware from './authMiddleware.ts'


//added comment

const app = express();


app.use(express.json())


app.use(cors())


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
