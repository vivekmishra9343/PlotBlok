// imports
import express from "express";

// express app
const app = express();

// port
let port = 9000;

// routes
app.use("/api/test",(req, res) => {
    res.send("Functioning");
})
app.use("/api/auth/register",(req, res) => {
    res.send("Functioning");
})
app.use("/api/auth/login",(req, res) => {
    res.send("Functioning");
})
app.use("/api/auth/logout",(req, res) => {
    res.send("Functioning");
})
app.use("/api/posts",(req, res) => {
    res.send("Functioning");
})
app.use("/api/posts/123412",(req, res) => {
    res.send("Functioning");
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port} `);
})