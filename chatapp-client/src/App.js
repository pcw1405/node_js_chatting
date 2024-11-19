// import { useEffect } from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import socket from "./server";
import InputField from"./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";

// import { useSelect } from "@mui/base";

function App() {
  const [user,setUser] =useState(null);
  const [message,setMessage] =useState("");
  const [messageList,setMessageList]=useState([]);
  console.log("message List",messageList);
  useEffect(()=>{
    socket.on('message',(message)=>{
      // console.log("res",message,res);
      setMessageList((prevState)=>prevState.concat(message));
    });
    askUserName();
  }, []);
  const askUserName = () =>{
    const userName=prompt("당신의 이름을 입력하세요")
    console.log("uuu",userName); 

    socket.emit("login",userName,(res)=>{
      // console.log("Res",res)
      if(res?.ok){
        setUser(res.data);
      }

    });
  };

  const sendMessage= (event) => {
    event.preventDefault()
    socket.emit("sendMessage",message,(res) =>{
      console.log("sendMessage res",message);
    });
  };
  return (
    <div>
      <div className="App">
        <MessageContainer messageList={messageList} user={user} />
        <InputField 
          message={message} 
          setMessage={setMessage} 
          sendMessage={sendMessage} 
        />
        
      </div>
    </div>
  );
}

export default App;
