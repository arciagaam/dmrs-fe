import React from 'react'

const CardContent = ( {title, description} ) => {
  return (
    <div className='flex flex-col gap-4 py-6'>
        <h2 className='text-accent-500 text-sm font-bold'>{title}</h2>
        <p className='text-background-dark text-xs'>{description}</p>
    </div>
  )
}

export default CardContent