// imports
import express from "express";
import authRoute from "./routes/auth.route.js"
import PostRoute from "./routes/post.route.js"
// express app
const app = express();

// port
let port = 9000;

// routes
app.use(express.json())
app.use("/api/posts", PostRoute);
app.use("/api/auth", authRoute);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port} `);
})