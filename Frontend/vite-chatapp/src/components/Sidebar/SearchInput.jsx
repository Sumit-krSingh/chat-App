import { FaSearch } from "react-icons/fa";

import React, { useState } from 'react'
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";

const SearchInput = () => {

    const [search, setSearch] = useState();
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversations();

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!search)return;
        if(search.length <3){
            toast.error("atleast 3 character required for search")

        }
        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation)
            setSearch("")

        }else{
            toast.error("no user found ")
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit} 
            className='flex items-center gap-2'>
                <input type="text" placeholder="search" className='input input-bordered rounded-full' 
                value={search}
                onChange={(e) =>setSearch(e.target.value)}/>
                <button type="submit" className="btn btn-circle bg-blue-700 text-white">
                    <FaSearch />

                </button>
            </form>
        </div>
    )
}

export default SearchInput