import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Index() {
  useEffect(() => {
    // ws://localhost:8080
    // wss://message.sandbox.shfansmall.com
    io("wss://message.sandbox.shfansmall.com", {
      path: "/",
      auth: {
        live_room_id: "8064", // 直播房间id
        user_socket_id: "user.0vNAGZoVmV2m7QrBqaDL", // 直播用户socket的id
      },
    });
  }, []);
  return <div>index</div>;
}
