import React from "react";
import lenFormat from '../../utils/lenFormat'
// import { io } from "socket.io-client";

export default function Index() {
  // useEffect(() => {
  //   // ws://localhost:8080
  //   // wss://message.sandbox.shfansmall.com
  //   const sio=io("wss://push.shfansmall.com", {
      
  //   });
  //   // sio.on('news',data=>{
  //   //   console.log(data);
  //   //   sio.emit('my other event', { my: 'data' });
  //   // })
  //   sio.onAny((eventName, data)=>{
  //     console.log(eventName,data)
  //   })

  // }, []);
  return <div>{lenFormat('彭玮玮卡社2021篮球imm原箱',10)}</div>;
}
