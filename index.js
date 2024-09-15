const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotEnv=require("dotenv");
const bodyparser=require("body-parser")
const adminLogin=require("./router/adminLogin.js");
const cors=require("cors");

app.use(
  cors({
      origin:"http://localhost:5173",
      methods:["GET","POST","PUT","DELETE"],
})
);

dotEnv.config();
app.use(bodyparser.json());
app.use("/api",adminLogin);
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));
app.use("/home", (req, res) => {
    res.send("<h1>Welcome to suby</h1>");
  });

const PORT=5001;
app.listen(PORT,()=>{
    console.log("server is running");
})