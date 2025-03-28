import React, { createContext, useEffect } from "react";
import { io } from "socket.io-client";
import { useState } from "react";

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const newSocket = io(import.meta.env.VITE_BASE_URL, {
      auth: { token },
      transports: ["polling"], // Force polling only
      path: "/socket.io/", // Must match backend path
      withCredentials: true,
    });

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
      if (token) {
        newSocket.emit("authenticate", { token });
      }
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
