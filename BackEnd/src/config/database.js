const { default: mongoose } = require("mongoose");
const mogooser=require("mongoose");
const env=require('dotenv').config();

const DB_URL=process.env.DB_URL;
mongooes.connect("mongodb://127.0.0.1:27017/SARS",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).tehn(()=>{
        console.log("Database connected Sucessfully");

    }).catch((error)=>{
        console.log("Database connection failed".error);
    });
    module.exports=mongoose;