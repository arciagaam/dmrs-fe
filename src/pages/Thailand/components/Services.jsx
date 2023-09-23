import Button from "../../../components/Button"
import CardContent from "./CardContent"
import { useState } from "react"

import { motion } from 'framer-motion'

const Services = ({ name, icon, subContents }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <motion.div 
      className={`relative overflow-hidden duration-300 ${isActive ? 'pb-10 ease-in-out duration-300 scale-105 min-h-[480px]': 'min-h-[240px] ease-in-out hover:scale-105 hover:fill-accent-300 duration-300'} flex flex-col text-sm gap-2 w-full ring-1 bg-white ring-gray-400 fill-accent-50 justify-center items-start pl-2 px-8 aspect-video ease-in-out duration-300 hover:text-white mobile:pl-4 mobile:text-md tablet:pl-4 laptop:pl-8 desktop:pl-8 desktop:text-md
        before:content-[' '] before:bg-accent-500 before:min-h-0 before:absolute before:bottom-0 before:left-0 before:w-full before:ease-in-out before:duration-200 ${isActive? 'before:h-full': 'before:delay-150 before:hover:min-h-full'}
      `}
      
    >
      <div className={`flex w-full h-full z-10 ${isActive ? 'items-start flex-col' : 'items-center'}`}>{isActive ? subContents.map((subContent, index) => <CardContent className={`${isActive ? 'opacity-100' : 'opacity-0'} duration-200`} key={index} title={subContent.title} description={subContent.description} />) : name}</div>
      <span className={`absolute top-16 -right-[10%] z-0 ${isActive ? 'opacity-25 scale-125 ease-in-out duration-500 rotate-12' : ' rotate-0'} -top-[20%] -right-[30%] scale-[0.7] mobile:scale-[0.7] mobile:-right-[20%] mobile:top-[0%] tablet:top-0 tablet:-right-[30%] laptop:scale-[0.8] laptop:-right-[4rem] laptop:top-[20%]`}>{icon}</span>
      <span className={`absolute z-20 ${isActive ? 'text-white' : ''} text-xs cursor-pointer bottom-4 left-2 mobile:text-sm mobile:left-4 laptop:text-sm laptop:left-8 `}><button onClick={() => {setIsActive((prevState) => !prevState)}}>{isActive ? 'Click to Hide <' : 'Click to Show >'}</button></span>
    </motion.div>
  )
}

export default Services