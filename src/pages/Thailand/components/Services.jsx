import Button from "../../../components/Button"
import CardContent from "./CardContent"
import { useState } from "react"

const Services = ({ name, icon, subContents }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`relative overflow-hidden ${isActive ? 'pb-10  duration-0 scale-105': 'hover:scale-105 hover:fill-accent-300'} flex flex-col text-sm gap-2 w-full border-2 ring-offset-2 bg-white border-white ring-1 ring-background-dark fill-accent-50 justify-center items-start pl-2 px-8 aspect-video ease-in-out duration-300 hover:text-accent-600 mobile:pl-4 mobile:text-md tablet:pl-4 laptop:pl-8 desktop:pl-8 desktop:text-md`}>
      <div className={`flex w-full h-full z-10 ${isActive ? 'items-start overflow-y-auto flex-col' : 'items-center'}`}>{isActive ? subContents.map((subContent, index) => <CardContent key={index} title={subContent.title} description={subContent.description} />) : name}</div>
      <span className={`absolute top-16 -right-[10%] z-0 ${isActive ? 'opacity-100 scale-125 ease-in-out duration-200' : 'opacity-100'} -top-[20%] -right-[30%] scale-[0.7] mobile:scale-[0.7] mobile:-right-[20%] mobile:top-[0%] tablet:top-0 tablet:-right-[30%] laptop:scale-[0.8] laptop:-right-[4rem] laptop:top-[20%]`}>{icon}</span>
      <span className={`absolute z-20 ${isActive ? '' : ''} text-xs cursor-pointer bottom-4 left-2 mobile:text-sm mobile:left-4 laptop:text-sm laptop:left-8 `}><button onClick={() => {setIsActive((prevState) => !prevState)}}>{isActive ? 'Click to Hide <' : 'Click to Show >'}</button></span>
    </div>
  )
}

export default Services