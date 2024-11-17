import express from "express";

const app = express();

let port = 9000;
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port} `);
})