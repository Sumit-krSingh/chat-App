import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from '../../components/message/MessageInput'
import { TiMessages } from "react-icons/ti"
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../Context/AuthContext'


const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation}= useConversation();
    useEffect(() =>{
        // code for unmount all data after logout
         return () => setSelectedConversation(null)
    },[setSelectedConversation])
    return (
        
            <div className=' md:min-w-[450px] flex flex-col'>
                {!selectedConversation ? (
                    <NoChatSelected />
                ) : (
                    <>
                    {/* header */ }
                    <div className='bg-slate-500 px-2 py-3 mb-2'>
                        <span className='label-text'>to:</span>{" "}
                        <span className='text-gray-800 font-bold'>{selectedConversation.fullName}</span>
                    </div>

                {/*message box  */}
                <Messages />
                <MessageInput />

            </>
            ) };

            </div>
        
    )
}

export default MessageContainer

const NoChatSelected = () => {
    const {authUser} = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex flex-col gap-2 items-center px-4 text-center sm:text-lg md:text-xl text-gray-100 font-semibold'>
                <p className='text-white font-bold text-2xl'>Welcome 👋 {authUser.fullName}🌟</p>
                <p className='text-white'>select to start Chat</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}