// import { useEffect } from "react";
import React, { useState, useEffect } from "react";
import "./App.css";
import socket from "./server";
import InputField from"./components/InputField/InputField";

// import { useSelect } from "@mui/base";

function App() {
  const [user,setUser] =useState(null);
  const [message,setMessage] =useState('')
  useEffect(()=>{
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
      console.log
    });
  };
  return (
    <div>
      <div className="App">

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
