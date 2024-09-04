import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="user-avatar" />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>hi! what is going on </div>
    </div>
  )
}

export default Message