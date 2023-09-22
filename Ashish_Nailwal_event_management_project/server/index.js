const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
// const messageRoutes = require("./routes/messages");
const app = express();
// const socket = require("socket.io");
require("dotenv").config();

app.use(cors());
app.use(express.json());
//
const db = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Acxiom Server Started and Database Connected")
}
db()


app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);




// routes
app.use("/api/auth", authRoutes);