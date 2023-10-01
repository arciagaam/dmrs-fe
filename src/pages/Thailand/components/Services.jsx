import Button from "../../../components/Button"
import CardContent from "./CardContent"
import { useState } from "react"

import { motion } from 'framer-motion'

const Services = ({ order, name, icon, content, subContents }) => {
  const [isActive, setIsActive] = useState(false)
  console.log(order);
  return (
    <motion.div
      className={`relative overflow-hidden ease-in-out duration-300 ${isActive ? 'min-h-[340px] desktop:min-h-[480px] h-fit scale-[1.03] fill-accent-200/30 text-white ': 'min-h-[300px] desktop:min-h-[400px] hover:scale-[1.03] hover:text-white hover:fill-accent-200/30'} flex flex-col text-base gap-2 w-full ring-1 bg-white ring-gray-400 fill-accent-400/30 justify-center items-start aspect-video mobile:text-md laptop:text-md desktop:text-md
        before:content-[' '] before:min-h-0 before:absolute before:bottom-0 before:left-0 before:w-full before:bg-accent-500 before:duration-200 before:ease-in-out ${isActive? 'before:min-h-full': 'before:delay-100 before:hover:min-h-full'}
      `}
    >
      <div className={`card-scroll flex flex-col w-full h-full items-start justify-start px-6 mobile:px-6 tablet:px-6 laptop:px-8 desktop:px-8 pt-6 pb-12 gap-6 z-10 ${isActive ? 'items-start flex-col overflow-y-auto tablet:overflow-y-auto laptop:overflow-y-auto desktop:overflow-y-auto delay-200' : 'items-center'}`}>
        {isActive ? subContents.map((subContent, index) => <CardContent className={'text-white'} key={index} title={subContent.title} description={subContent.description} />) : <div className="flex flex-col gap-2">{[name, content]}</div> }
      </div>
      <span className={`absolute top-16 -right-[10%] z-0 duration-500 ${isActive ? 'scale-125 rotate-12' : ' rotate-0'} `}>{icon}</span>
      <span className={`absolute z-20 ${isActive ? 'text-white bg-gradient-to-t from-accent-500 via-accent-500/90 to-accent-500/10' : ''} w-full pb-3 pt-6 bottom-0 px-6 mobile:px-6 tablet:px-6 laptop:px-8 text-xs cursor-pointer mobile:text-sm laptop:text-sm`}><button onClick={() => {setIsActive((prevState) => !prevState)}}>{isActive ? 'Click to Hide <' : 'Click to Show >'}</button></span>
      {/* {isActive ? <span className='absolute z-20 text-white bg-gradient-to-b from-accent-500/90 via-accent-500/90 to-accent-500/10 w-full py-3 top-0'></span> : '' } */}
    </motion.div>
  )
}

export default Services