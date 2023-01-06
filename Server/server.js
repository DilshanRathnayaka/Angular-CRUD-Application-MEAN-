const express = require("express");
const mongoose = require("mongoose")
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
dotenv.config();
const Product = require("./Routes/Product")

app.listen(5000,()=>{
    console.log('Server is Running')
})
mongoose.connect(process.env.DB).then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err);
})
app.use(cors());
app.use(express.json());
app.use("/api/Product",Product);