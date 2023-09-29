import React from 'react'

const CardContent = ( {title, description, className} ) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
        <h2 className='text-base mobile:text-md laptop:text-md desktop:text-md font-bold'>{title}</h2>
        <p className='text-xs'>{description}</p>
    </div>
  )
}

export default CardContent