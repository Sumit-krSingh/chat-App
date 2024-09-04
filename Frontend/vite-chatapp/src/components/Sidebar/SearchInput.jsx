import { FaSearch } from "react-icons/fa";

import React from 'react'

const SearchInput = () => {
    return (
        <div>
            <form className='flex items-center gap-2'>
                <input type="text" placeholder="search" className='input input-bordered rounded-full' />
                <button type="submit" className="btn btn-circle bg-blue-700 text-white">
                    <FaSearch />

                </button>
            </form>
        </div>
    )
}

export default SearchInput