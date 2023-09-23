import React from 'react'
import SubParagraph from './SubParagraph'

const Paragraph = ( { title, content, subParagraph} ) => {
  

  return (
    <div className='flex flex-col gap-6'>
      <li className='font-bold'>
          <p>{title}</p>
          <p className='font-normal'>{content}</p>
      </li>
        {subParagraph ? <ol className='pl-10 list-["a."]'>{subParagraph.map((item, index) => <SubParagraph key={index} content={item.content} /> )} </ol>: ''}
    </div>
  )
}

export default Paragraph