import Hero from "../../components/Hero"

const Thailand = () => {
  return (
    <div className="flex flex-col w-full bg-white overflow-clip">
			<Hero>
				<div className="z-10 flex flex-col items-center justify-center w-full gap-3 text-white">
					<div className="flex flex-col items-center justify-center">
						<p className='z-10 text-xs'>DMRS</p>
						<h1 className='z-10 text-lg text-center'>Dan Murdoch Risk Services Thailand</h1>
					</div>
				</div>
			</Hero>
    </div>
    
  )
}

export default Thailand