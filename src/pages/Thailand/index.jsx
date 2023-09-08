/* eslint-disable no-mixed-spaces-and-tabs */
import Hero from "../../components/Hero"
import Button from '../../components/Button'
import { IntelligenceAnalysts, BussinessIntelligence, UndercoverOperations } from "../../components/Svgs"
import Services from "./components/Services"
import BgTextMarquee from "./components/BgTextMarquee"
import OtherServices from "./components/OtherServices"
import GridFiller from "../Home/components/GridFiller"


const Thailand = () => {
    let size = '300';
    const services = [ 
      {
        name:'Intelligence', 
        icon:<IntelligenceAnalysts width={size} height={size} />,
        subContent: 
        [
          {
            title: 'Online Intelligence Data Collection and Analysis',
            description: 'Unique manual online intelligence monitoring service. Intelligent intelligence protecting your products and company online. All data collected is secured and displayed within a SharePoint environment for access 24/7 with corporate visual presentations linked to the raw data collected.',
          },
        ]
      }, 
      {
        name:'Research',
        icon:<BussinessIntelligence width={size} height={size} />,
        subContent: 
        [
          {
            title: 'Business Intelligence and Research',
            description: 'Background checks within the geographical area of your concern involving in-depth overt and covert research being conducted resulting in fact driven reporting you can rely on.',
          },
        ]
      }, 
      {
        name:'Investigations', 
        icon:<UndercoverOperations width={size} height={size} />,
        subContent: 
        [
          {
            title: 'Online Investigations',
            description: 'Dan Murdoch Risk Services has set the "industry standard" in online investigations conducting research and pretext engagement leading to undercover investigations and evidence collection on a global footing.',
          },
        ]
      }, 
    ]


  return (
    <div className="flex flex-col justify-center items-center w-full bg-white overflow-clip">
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
        <div className="relative flex w-full h-screen gap-20 items-center py-10 px-28 desktop:px-12 tablet:flex-col tablet:gap-10 ">
          <div className="flex w-1/2 h-[calc((3/5)*100vh)] bg-gray-100 rounded-tl-[4rem] rounded-br-[4rem] tablet:w-full"></div>
          <img src="/images/thailand-map.png" alt="" className='absolute top-0 right-[20%] opacity-50 h-full brightness-90 z-0' />

          <div className="flex flex-col justify-center h-full w-1/2 gap-4 z-10 tablet:w-full">
            <div>
              <h2 className="text-xl font-bold">Dan Murdoch Risk Services</h2>
              <h2 className="text-xl font-bold text-primary-300">Thailand.</h2>
            </div>
            <div className="flex flex-col gap-4">
              <p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Thailand</strong> Co. Limited is based in Thailand with staff also in the Philippines, Australia, Hong Kong and China with trusted and verified agents in many global locations.</p>
              <p>DMRS staff are <strong>trained detectives</strong> and <strong>intelligence analysts</strong> who use both objective and subjective thinking to <strong>gather online data and intelligence</strong> for many Fortune 500 companies worldwide.</p>
              <p>Our facilities also offer <strong>premier and innovative investigative consultancy</strong> in all areas of corporate and personal requirements. DMRS is proud to be focused on the  <strong>protection of patients globally</strong> through our identification of risks concerned with the illicit trade in counterfeit, sub-standard and suspect medicines together with all associated risks to corporations tasked with the protection of consumers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative w-full h-full flex items-center align-middle overflow-hidden pb-20">
        <div className="flex flex-col w-full h-fit mt-10 gap-10 justify-start px-20 desktop:px-6 tablet:px-0">
          <div className="flex flex-col gap-2 items-start pl-20 tablet:pl-10">
            <h2 className="text-xl font-bold z-10">Services</h2>
            <p className="z-10">The services DMRS offers fall into three categories <strong>INTELLIGENCE</strong>, <strong>INVESTIGATIONS</strong> and <strong>RESEARCH</strong>.</p>
          </div>
          <div className="flex flex-row h-fit justify-start items-start px-20">
            <div className="grid grid-cols-3 flex-row gap-8 z-10 justify-center items-center w-full fill-black hover:text-secondary-200 hover:fill-secondary-200
                  laptop:grid-cols-2 tablet:flex tablet:flex-col">
              {services.map((item, index) => <Services key={index} name={item.name} icon={item.icon} subContents={item.subContent}/> )}
            </div>
          </div>
        </div>

        <div className="absolute left-0 -top-10 grid w-full h-screen grid-cols-8 rounded-full tablet:grid-cols-5">
          <GridFiller cellCount={40} cellClass={'border border-background-dark/5'} />
        </div>
      </section>

      {/* Other Services */}
      <section className="flex flex-col w-full h-full gap-10 justify-center items-center px-28 mb-10 desktop:px-6">
        <div className="flex flex-col gap-2 items-start pl-20">
          <h2 className="text-xl font-bold z-10">Other Services</h2>
          <p className="z-10">However, as an additional service to our partners, we offer further unique capabilities such as -</p>
          <OtherServices /> 
        </div>
      </section>

    </div>
    
  )
}

export default Thailand