const chatController = require("../Controllers/chat.controller");
const userController=require("../Controllers/user.controller")

module.exports=function(io){

    io.on("connection",async(socket)=>{
        console.log("client is connected",socket.id);

        socket.on("login",async(userName,cb)=>{
            // console.log("backend",userName);

            try{
                const user =await userController.saveUser(userName,socket.id);
                const welcomeMessage = {
                    chat: `${user.name} is joined the room`,
                    user: {id:null,name: "system"},
                };
                io.emit("message",welcomeMessage);
                cb({ok:true,data:user})
            }catch(error){
                cb({ok:false,error:error.message})
            }
            
        })

        socket.on("sendMessage", async(message,cb)=>{
            // console.log("");
            try{
                const user =await userController.checkUser(socket.id)
                // 유저찾기 socket id로 
                const newMessage=await chatController.saveChat(message,user);
                //메시지저장 (유저)
                // cb({ok:true,data:newMessage})
                io.emit("message",newMessage)
                cb({ok:true})

            }catch(error){
                cb({ok:false,error:error.message})
            }
            
        });

        socket.on("disconnect", ()=>{
            console.log("user is disconnectd");
        });

    });
    //io관련 모든일을 여기서 한다 
    // 연결된 사람을 소켓이라고 한다 //  소켓정보로 매개변수로 받아준다
};