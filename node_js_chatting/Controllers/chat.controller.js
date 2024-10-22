
const Chat=require("../Models/chat")
const user = require("../Models/user")
const chatController={}

chatController.saveChat=async(message, user)=>{
    const newMessage=new Chat({
        chat:message,
        user:{
            id:user._id,
            //몽고디비에 부여해주는 데이터의 주미등록번호
            name:user.name
        },

    });
    await newMessage.save();
    return newMessage;
}

module.exports=chatController