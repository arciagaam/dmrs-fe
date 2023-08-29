/* eslint-disable no-mixed-spaces-and-tabs */
import Hero from "../../components/Hero"
import Button from '../../components/Button'
import { IntelligenceAnalysts, BussinessIntelligence, UndercoverOperations } from "../../components/Svgs"
import Services from "./components/Services"
import BgTextMarquee from "./components/BgTextMarquee"


const Thailand = () => {
	const services = [ 
		{name:'Intelligence', icon:<IntelligenceAnalysts />}, 
		{name:'Research', icon:<BussinessIntelligence />}, 
		{name:'Investigations', icon:<UndercoverOperations />}, 
		{name:'Other Services', icon:''},
	]


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

					<div className="flex flex-col w-1/2 gap-4">
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
					<div className="flex flex-col w-1/2 gap-2 relative">
						<h2 className="text-2xl font-bold z-10" >SERVICES</h2>
						<p className="text-base z-10">The services DMRS offers fall into three categories <strong className="text-accent-500">INTELLIGENCE</strong>, <strong className="text-accent-500">INVESTIGATIONS</strong> and <strong className="text-accent-500">RESEARCH</strong>. However, as an additional service to our partners, we offer further unique capabilities.</p>
						<div className="absolute flex text flex-col w-[150%] -left-40 -top-40 overflow-clip">
							<BgTextMarquee />
							<BgTextMarquee />
							<BgTextMarquee />
						</div> 
					</div>

					<div className="flex flex-col h-full w-1/2 justify-center items-center bg-white z-10">
						<div className="grid grid-cols-2 w-3/4 z-10 fill-black hover:text-secondary-200 hover:fill-secondary-200">
							{services.map((item, index) => item.name != 'Services' ? <Services key={index} name={item.name} icon={item.icon}/> : '')}
						</div>
					</div>
				</div>
			</section>

    </div>
    
  )
}

export default Thailand