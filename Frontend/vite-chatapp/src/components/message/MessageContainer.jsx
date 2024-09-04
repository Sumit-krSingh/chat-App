import React from 'react'
import Messages from './Messages'
import MessageInput from '../../components/message/MessageInput'


const MessageContainer = () => {
    return (
        <>
            <div className=' md:min-w-[450px] flex flex-col'>
                {/* header */}
                <div className='bg-slate-500 px-2 py-3 mb-2'>
                    <span className='label-text'>to:</span>{" "}
                    <span className='text-gray-800 font-bold'>Sumit singh</span>
                </div>

                {/*message box  */}
                
                    <Messages />
                
                <MessageInput />

            </div>
        </>
    )
}

export default MessageContainer