import Button from "../../../components/Button"

const Services = ({ name, icon }) => {
  return (
    <div className="relative overflow-hidden flex flex-col gap-2 w-1/3 text-base border bg-white border-black fill-gray-100 justify-center items-center text-center aspect-video cursor-pointer transition-all duration-200 hover:scale-105 hover:text-background-dark hover:fill-accent-100">
      <p className="text-base z-10">{name}</p>
      <span className="absolute top-8 -right-12 z-0">{icon}</span>
      <span className="absolute bottom-4 right-4 border-b border-secondary-200 text-sm hover:border-primary-300 hover:text-primary-400 transition-all"><button>View {">"}</button></span>
    </div>
  )
}

export default Services