const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    name:{
        type: String,
        required:[true,"User must type name"],
        unique: true,
    },
    token:{
        type:String,
        //  연결  id를 저장한다
    },
    online:{
        type:Boolean,
        default:false,
        // 나중에 추가 기능
    },
});
module.exports=mongoose.model("User",userSchema);

