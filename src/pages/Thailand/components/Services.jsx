import Button from "../../../components/Button"

const Services = ({ name, icon }) => {
  return (
    <div className="relative overflow-hidden flex flex-col gap-2 w-1/3 text-base border-2 ring-offset-2 bg-white border-white ring-1 ring-background-dark fill-accent-50 justify-center items-start pl-8 aspect-video cursor-pointer transition-all duration-200 hover:scale-105 hover:text-accent-400 hover:fill-accent-400">
      <p className="text-base z-10">{name}</p>
      <span className="absolute top-8 -right-12 z-0">{icon}</span>
      <span className="absolute bottom-4 left-8 border-b border-transparent text-sm hover:border-accent-400"><button>View {">"}</button></span>
    </div>
  )
}

export default Services