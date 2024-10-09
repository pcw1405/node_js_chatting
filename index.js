const {createServer} =require("http")
const app =require("./app")
const {server} = require("socket.io")
require("dotenv").config();

const httpServer = createServer(app)
const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000"
    }
}) //이 코드는 CORS 설정을 통해 특정 출처에서의 WebSocket 연결을 허용하는 Socket.IO 서버를 설정합니다.

httpServer.listen(process.env.PORT,()=>{
    console.log("server listening on port",process.env.Port);
});
