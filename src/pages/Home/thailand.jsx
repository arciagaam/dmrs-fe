/* eslint-disable no-mixed-spaces-and-tabs */
import Hero from "../../components/Hero"
import Button from '../../components/Button'

const Thailand = () => {
  return (
    <div className="flex flex-col w-full bg-white overflow-clip">
			<Hero>
				<div className="z-10 flex flex-col items-center justify-center w-full gap-3 text-white">
					<div className="flex flex-col items-center justify-center gap-4">
						<h1 className='z-10 text-3xl text-center font-bold'>DMRS Thailand</h1>
						<Button variant="outline" size="sm">Services</Button>
					</div>
				</div>
			</Hero>

			{/* DMRS Thailand section */}
			<section className="navTrigger">
				<div className="flex w-full h-screen gap-20 items-center py-10 px-28">
					<div className="flex w-1/2 h-[calc((3/5)*100vh)] bg-gray-100 rounded-tl-[4rem] rounded-br-[4rem]">

					</div>

					<div className="flex flex-col w-1/2 gap-6">
						<div>
							<h2 className="text-xl font-bold">Dan Murdoch Risk Services</h2>
							<h2 className="text-xl font-bold text-primary-300">Thailand.</h2>
						</div>
						<div className="flex flex-col gap-4">
							<p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Thailand</strong> Co. Limited is based in Thailand with staff also in the Philippines, Australia, Hong Kong and China with trusted and verified agents in many global locations.</p>
							<p>DMRS staff are <strong>trained detectives</strong> and <strong>intelligence analysts</strong> who use both objective and subjective thinking to <strong>gather online data and intelligence</strong> for many Fortune 500 companies worldwide.</p>
							<p>Our facilities also offer <strong>premier and innovative investigative consultancy</strong> in all areas of corporate and personal requirements. DMRS is proud to be focused on the  <strong>protection of patients globally through our identification of risks</strong> concerned with the illicit trade in counterfeit, sub-standard and suspect medicines together with all associated risks to corporations tasked with the protection of consumers worldwide.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			<section>
				<div className="flex w-full h-screen gap-20 items-center py-10 px-28">
					<div className="flex flex-col w-1/2 h-[calc((3/5)*100vh) gap-2">
						<h2 className="text-2xl font-bold">SERVICES</h2>
						<p className="text-base">The services DMRS offers fall into three categories <strong className="text-accent-500">INTELLIGENCE</strong>, <strong className="text-accent-500">INVESTIGATIONS</strong> and <strong className="text-accent-500">RESEARCH</strong>. However, as an additional service to our partners, we offer further unique capabilities.</p>
					</div>

					<div className="flex flex-col h-screen w-1/2 gap-6 justify-center">
						<div className="grid grid-cols-2 gap-6 h-1/2 h-[calc((3/5)*100vh)">
							<div className="flex ring-1 ring-background-dark text-base justify-center items-center rounded-[3rem] cursor-pointer transition-all duration-100 hover:ring-primary-300 hover:text-primary-300">
								<p>Intelligence</p>
							</div>
							<div className="flex ring-1 ring-background-dark text-base justify-center items-center rounded-[3rem] cursor-pointer transition-all duration-100 hover:ring-primary-300 hover:text-primary-300">
								<p>Research</p>
							</div>
							<div className="flex ring-1 ring-background-dark text-base justify-center items-center rounded-[3rem] cursor-pointer transition-all duration-100 hover:ring-primary-300 hover:text-primary-300">
								<p>Investigations</p>
							</div>
							<div className="flex ring-1 ring-background-dark text-base justify-center items-center rounded-[3rem] cursor-pointer transition-all duration-100 hover:ring-primary-300 hover:text-primary-300">
								<p>Other Services</p>
							</div>
						</div>
					</div>
				</div>
			</section>

    </div>
    
  )
}

export default Thailand