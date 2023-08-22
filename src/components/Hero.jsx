import React from 'react'

const Hero = ({children}) => {
  return (
    <div className="flex p-10 h-[80vh] w-full bg-[#1e1e1e] pt-16">
        {children}
    </div>
  )
}

export default Hero