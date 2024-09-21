import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton'
import useListernMessages from '../../hooks/useListernMessages'


const Messages = () => {
  const {loading, messages} = useGetMessages();
  useListernMessages();
  const lastMessageRef = useRef();

  useEffect(() =>{
    setTimeout(() =>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})

    },100)
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map(
        (message) =>
          <div key={message._id} ref={lastMessageRef}>

            <Message message={message}/>
          </div>
      )}

       {loading && [...Array(2)].map((_, idx)=> <MessageSkeleton key ={idx}/>)}
        {!loading && messages.length === 0 && (
        <p className='text-center text-blue-500 font-bold text-xl'>send a message to start conversation</p>
       )}
       </div>
  )
}

export default Messages