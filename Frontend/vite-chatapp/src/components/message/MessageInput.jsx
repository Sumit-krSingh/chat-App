import {BsSend} from "react-icons/bs";
import React from 'react'

const MessageInput = () => {
  return (
    <div>
    <form className='px-4 my-3'>
        <div className='w-full relative'>

        <input type="text" placeholder="type your message" className='border text-sm rounded-lg w-full p-2.5' />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-2">
            <BsSend/>
            </button>
        </div>
    </form>
</div>
  )
}

export default MessageInput