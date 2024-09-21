import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import useConversation from "../zustand/useConversation";

const useListernMessages = () => {
  const {socket}=useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect( () =>{
    socket?.on("newMessage", (newMessage) =>{
      newMessage.shouldShake = true;

        setMessages([...messages, newMessage]);
    });
    return () =>socket?.off("newMessage")
  },[socket, setMessages, messages]);
}

export default useListernMessages