const Services = ({ name, icon }) => {
  return (
    <div className="flex flex-col gap-2 text-base justify-center items-center aspect-square cursor-pointer ring-1 transition-all duration-200 hover:scale-105 hover:bg-primary-300 hover:text-white hover:fill-white">
        {icon}
        <p>{name}</p>
    </div>
  )
}

export default Services