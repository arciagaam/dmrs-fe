import React from 'react'

const CardContent = ( {title, description} ) => {
  return (
    <div className='flex flex-col gap-2 py-6 mobile:gap-2'>
        <h2 className='text-sm font-bold text-accent-500'>{title}</h2>
        <p className='text-xs text-background-dark'>{description}</p>
    </div>
  )
}

export default CardContent