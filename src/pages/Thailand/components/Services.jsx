const Services = ({ name, icon }) => {
  return (
    <div className="flex flex-col gap-2 ring-1 ring-background-dark text-base justify-center items-center rounded-[3rem] cursor-pointer transition-all duration-200 hover:ring-primary-300 hover:text-primary-300 hover:fill-primary-300">
        {icon}
        <p>{name}</p>
    </div>
  )
}

export default Services