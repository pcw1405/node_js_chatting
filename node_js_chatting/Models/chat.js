const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        chat:String, // 메세지 내용
        user: {   // 메시지를 누가 했는지 객체로 저장한다
          id: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
          },
            name: String,
        },


    },
    {timestamps: true}

);

module.exports=mongoose.model("Chat",chatSchema);