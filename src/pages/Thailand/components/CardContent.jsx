import React from 'react'

const CardContent = ( {title, description} ) => {
  return (
    <div className='flex flex-col gap-2 py-6 mobile:gap-2'>
        <h2 className='text-sm font-bold text-white'>{title}</h2>
        <p className='text-xs text-white'>{description}</p>
    </div>
  )
}

export default CardContent