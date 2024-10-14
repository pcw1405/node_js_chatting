const {createServer} =require("http")
const app =require("./app")
const {Server} = require("socket.io")
require("dotenv").config();

const httpServer = createServer(app)
const io = new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
    },
}); //이 코드는 CORS 설정을 통해 특정 출처에서의 WebSocket 연결을 허용하는 Socket.IO 서버를 설정합니다.

require("./utils/io")(io);
httpServer.listen(process.env.PORT,()=>{
    console.log("server listening on port",process.env.PORT);
});

// 
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/kakao-talk', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB 연결 성공'))
//     .catch(err => console.error('MongoDB 연결 실패:', err));

