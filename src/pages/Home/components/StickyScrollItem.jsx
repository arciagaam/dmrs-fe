import React from 'react'

const StickyScrollItem = ({children}) => {
  return (
    <div className="p-6 h-[calc(100vh-4rem)] tablet:h-fit">
        {children}
    </div>
  )
}

export default StickyScrollItem