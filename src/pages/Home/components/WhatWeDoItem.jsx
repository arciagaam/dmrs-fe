import React, { useState } from 'react'

const WhatWeDoItem = ({ children, content, parentHover, active, handleSelectActive}) => {
    
    return (
        <div onClick={() => handleSelectActive(content)} className={`hover:grayscale-0 hover:opacity-100 hover:text-primary-300 flex flex-col text-center items-center aspect-square justify-center gap-3 p-3 border rounded-md cursor-pointer transition-all duration-500 ${active ? 'border-accent-400 text-accent-400' : parentHover ? 'grayscale text-gray-500 opacity-50' : 'grayscale-0 text-primary-300 opacity-100 border-black/20 '}`}>
            <div className="bg-primary-300 min-h-[3rem] rounded-full aspect-square"></div>
            <p className='text-xs'>{content.name}</p>
        </div>
    )
}

export default WhatWeDoItem