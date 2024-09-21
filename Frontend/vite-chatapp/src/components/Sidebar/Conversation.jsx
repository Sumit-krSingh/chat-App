import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../Context/SocketContext';

const Conversation = ({conversation,emoji,lastIdx}) => {
  // callng useConversation global hooks to select users in conversation box
  const {selectedConversation, setSelectedConversation}=useConversation();
  const isSlected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
      ${isSlected? "bg-sky-500" : ""}`}
      onClick={() =>setSelectedConversation(conversation)}>
      <div className={`avatar ${isOnline?" online" :""}`}>
        <div className='w-12 rounded-full'>
          <img src={conversation.profilePic} />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-500'>{conversation.fullName}</p>
          <span className='text-xl'>{emoji}</span>
        </div>
      </div>

    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'></div>};
    </>
  )
}

export default Conversation