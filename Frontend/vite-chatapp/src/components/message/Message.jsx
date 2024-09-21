import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../Context/AuthContext'
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  const fromMe = message.senderId === authUser._id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  const chatBubble = fromMe ? "bg-green-500" :"bg-sky-500";
  const formattedTime = extractTime(message.createdAt);

  const shakeClass = message.shouldShake? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="user-avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${chatBubble} ${shakeClass} pb-1`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message