module.exports=function(io){

    io.on("connection",async(socket)=>{
        console.log("client is connected",socket.id);

        socket.on("login",async(userName,cb)=>{
            console.log("backend",userName);
        })

        socket.on("disconnect", ()=>{
            console.log("user is disconnectd");
        });

    });
    //io관련 모든일을 여기서 한다 
    // 연결된 사람을 소켓이라고 한다 //  소켓정보로 매개변수로 받아준다
};