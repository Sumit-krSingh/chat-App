import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className='flex flex-col p-3 border-r border-slate-600'>
            <SearchInput/>
            <div className="divider px-3"></div>
            <Conversations/>
            
        </div>
    )
}

export default Sidebar