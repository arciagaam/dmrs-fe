import React from 'react'

const StickyScrollItem = ({children}) => {
  return (
    <div className="p-6 h-fit laptop:h-[calc(100vh-4rem)]">
        {children}
    </div>
  )
}

export default StickyScrollItem