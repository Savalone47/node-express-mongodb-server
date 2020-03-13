import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("json space", 4);

app.get("/",(req, res)=>{
  res.json({status: "Task API"});
});

app.get("/node",(req, res)=>{
  res.json({
    Tasks: [
      {title: "Build Node Api"},
      {web: "Medium.com" }
    ]
  });
});
app.listen(PORT, ()=>console.log(`Task API - Port ${PORT}`));
