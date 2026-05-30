import express from "express";

const app = express();


app.use(express.json())



app.get("/healthz",(req,res)=>{
  res.status(200).json({
     health : "ok" 
  }) 
})

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
