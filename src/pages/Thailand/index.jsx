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
          {
            title: 'Intellectual Property Protection',
            description: 'Many global Fortune 500 companies leave their trademark, copyright and intellectual property protection in our hands. Many companies in the worldwide pharmaceutical marketplace trust us to protect them with our hands-on manual intelligence and investigative consultancy.',
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
        <div className="z-10 flex flex-col justify-center w-full text-white px-6">
          <div className="flex flex-col items-center justify-center gap-8 desktop:gap-4">
            <h1 className='z-10 text-xl font-bold mobile:text-center mobile:text-2xl tablet:text-center tablet:text-2xl'>DMRS Thailand</h1>
            <Button variant="outline" size="sm" className="w-full mobile:fit tablet:w-fit">Services</Button>
          </div>
        </div>
      </Hero>

      {/* DMRS Thailand section */}
      <section className="navTrigger">
        <div className="relative flex flex-col w-full h-fit px-6 py-8 gap-6 mobile:py-10 mobile:px-12 mobile:h-fit mobile:flex-col tablet:items-center tablet:px-12 tablet:flex-row desktop:gap-20 desktop:px-24">
          <div className="flex w-full h-[300px] bg-gray-200 rounded-tl-[2rem] rounded-br-[2rem] tablet:h-[calc((3/5)*100vh)] tablet:w-1/2 laptop:w-1/2 tablet:rounded-tl-[4rem] tablet:rounded-br-[4rem]"></div>
          <img src="/images/thailand-map.png" alt="" className='absolute opacity-50 h-full brightness-90 z-0 top-0 laptop:right-[20%]' />

          <div className="flex flex-col justify-center gap-4 z-10 w-full mobile:w-full mobile:gap-4 tablet:w-1/2 tablet:gap-10">
            <h2 className="text-md font-bold mobile:text-xl tablet:text-xl">Dan Murdoch Risk Services <strong className="text-primary-300 font-bold">Thailand.</strong></h2>
            <div className="flex flex-col gap-4 text-xs mobile:text-sm laptop:text-sm">
              <p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Thailand</strong> Co. Limited is based in Thailand with staff also in the Philippines, Australia, Hong Kong and China with trusted and verified agents in many global locations.</p>
              <p>DMRS staff are <strong>trained detectives</strong> and <strong>intelligence analysts</strong> who use both objective and subjective thinking to <strong>gather online data and intelligence</strong> for many Fortune 500 companies worldwide.</p>
              <p>Our facilities also offer <strong>premier and innovative investigative consultancy</strong> in all areas of corporate and personal requirements. DMRS is proud to be focused on the  <strong>protection of patients globally</strong> through our identification of risks concerned with the illicit trade in counterfeit, sub-standard and suspect medicines together with all associated risks to corporations tasked with the protection of consumers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative w-full h-full flex items-center align-middle overflow-hidden pb-20 px-6 mobile:px-6 tablet:px-12 tablet:mt-10 laptop:gap-10 desktop:px-24">
        <div className="flex flex-col w-full h-fit gap-6 justify-start">
          <div className="flex flex-col gap-2 items-start mobile:pl-5 tablet:pl-5 laptop:pl-10 desktop:pl-20">
            <h2 className="text-md font-bold z-10 mobile:text-xl laptop:text-xl">Services</h2>
            <p className="text-xs z-10 mobile:text-sm laptop:text-sm">The services DMRS offers fall into three categories <strong>INTELLIGENCE</strong>, <strong>INVESTIGATIONS</strong> and <strong>RESEARCH</strong>.</p>
          </div>
          <div className="flex flex-row h-fit justify-start items-start mobile:px-12 tablet:px-12 laptop:px-20">
            <div className="flex flex-col gap-8 z-10 w-full fill-black hover:text-secondary-200 hover:fill-secondary-200
                  mobile:flex  mobile:flex-col tablet:grid tablet:justify-center tablet:grid-cols-2 tablet:flex-col laptop:grid laptop:grid-cols-3">
              {services.map((item, index) => <Services key={index} name={item.name} icon={item.icon} subContents={item.subContent}/> )}
            </div>
          </div>
        </div>

        <div className="absolute left-0 -top-10 grid w-full h-screen rounded-full grid-cols-5 desktop:grid-cols-8">
          <GridFiller cellCount={40} cellClass={'border border-background-dark/5'} />
        </div>
      </section>

      {/* Other Services */}
      <section className="flex flex-col w-full h-full gap-10 justify-center items-center mb-10 px-6 tablet:px-12 desktop:px-24">
        <div className="flex flex-col gap-2 items-start mobile:pl-5 tablet:pl-5 laptop:pl-10 desktop:pl-20">
          <h2 className="text-md font-bold z-10 mobile:text-xl laptop:text-xl">Other Services</h2>
          <p className="z-10 text-xs mobile:text-sm laptop:text-sm">However, as an additional service to our partners, we offer further unique capabilities such as -</p>
          <OtherServices /> 
        </div>
      </section>

    </div>
    
  )
}

export default Thailand