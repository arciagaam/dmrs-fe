import Button from "../../../components/Button"
import CardContent from "./CardContent"
import { useState } from "react"

const Services = ({ name, icon, subContents }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="relative overflow-hidden flex flex-col gap-2 w-full text-md border-2 ring-offset-2 bg-white border-white ring-1 ring-background-dark fill-accent-50 justify-center items-start px-8 aspect-video transition-all duration-200 hover:scale-105 hover:text-accent-600 hover:fill-accent-300 desktop:text-base desktop:pl-4">
      <div className={`flex w-full h-full z-10 ${isActive ? 'items-start overflow-y-auto flex-col' : 'items-center'}`}>{isActive ? subContents.map((subContent, index) => <CardContent key={index} title={subContent.title} description={subContent.description} />) : name}</div>
      <span className={`absolute top-16 -right-[10%] z-0 ${isActive ? 'opacity-0' : 'opacity-100'} desktop:scale-[0.6] desktop:max-w-[25px] desktop:right-[40%] desktop:-top-4 laptop:scale-[0.3] laptop:max-w-[25px] laptop:right-[40%] laptop:-top-4`}>{icon}</span>
      <span className="absolute bottom-4 left-8 text-sm desktop:left-4 desktop:text-xs z-20 cursor-pointer"><button onClick={() => {setIsActive((prevState) => !prevState)}}>{isActive ? 'Click to Hide <' : 'Click to Show >'}</button></span>
    </div>
  )
}

export default Services