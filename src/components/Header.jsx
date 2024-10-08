import React from 'react'
import { useState } from 'react';
function Header({ onSearch }) {
    const [textSearch, settextSearch] = useState('');
    return (
        <div className="flex items-center justify-between p-4 bg-black">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-700">Movie</h1>
                <nav className='flex items-center space-x-4'>
                    <a href="" className='text-white'>Home</a>
                    <a href="" className='text-white'>About</a>
                    <a href="" className='text-white'>Contract</a>
                </nav>
            </div>
            <div className='flex items-start space-x-4'>
                <input type="text" placeholder="Search" className='p-3 text-black' onChange={(e) => settextSearch(e.target.value)} value={textSearch} />
                <button className="p-2 text-white bg-red-600" onClick={() => onSearch(textSearch)} > Search </button>
            </div>
        </div>
    )
}

export default Header
