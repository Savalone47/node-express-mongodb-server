import express from "express";
import consign from "consign";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("json space", 4);

consign()
    .include("models")
    .then("routes")
    .into(app);

app.listen(PORT, ()=>console.log(`Task API - Port ${PORT}`));
