const express = require("express")
const mongoose = require("mongoose")
const app= express()

 mongoose.connect("데이터베이스 주소",{
    userNewUrlParser : true,
    useUnifiedTopology: true,

 }).then(()=>console.log("connected to database"));

 module.exports=app