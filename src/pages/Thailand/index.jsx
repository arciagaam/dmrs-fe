/* eslint-disable no-mixed-spaces-and-tabs */
import Hero from "../../components/Hero"
import Button from '../../components/Button'
import { IntelligenceAnalysts, BussinessIntelligence, UndercoverOperations } from "../../components/Svgs"
import Services from "./components/Services"
import BgTextMarquee from "./components/BgTextMarquee"
import OtherServices from "./components/OtherServices"
import GridFiller from "../Home/components/GridFiller"
import { useEffect, useRef } from "react"

import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -80
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.1,
      duration: .7
    }
  })
}

const Thailand = () => {
    let size = '300';
    const blockCount = new Array(28);
    const blockRef = useRef([]);
    
    function toggleBlock(selectedBlock) {
      if (selectedBlock.classList.contains('active') || !selectedBlock) return;
  
      selectedBlock.classList.add('fill');
  
      setTimeout(() => {
        selectedBlock.classList.remove('fill');
      }, (Math.random() * 2) * 5000);
  
    }

    useEffect(() => {
      const intervalId = setInterval(() => {
        const selectedBlock = blockRef.current[Math.floor(Math.random() * 25)];
        toggleBlock(selectedBlock);
      }, 5000)
  
      return () => clearInterval(intervalId);
    }, [])

    const services = [ 
      {
        name:<p className="self-start font-bold">Intelligence</p>, 
        icon:<IntelligenceAnalysts width={size} height={size} />,
        content: <p className="text-sm">We are the industry leaders in manual intelligence collection, product monitoring and global investigative work protecting Fortune 500 companies with a worldwide footprint.</p>,
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
        name:<p className="self-start font-bold">Research</p>,
        icon:<BussinessIntelligence width={size} height={size} />,
        content: <p className="text-sm">If you have a problem whether it is offline or online we proactively research using our research methodology and tools to give you an appropriate and considered answer.</p>,
        subContent: 
        [
          {
            title: 'Business Intelligence and Research',
            description: 'Background checks within the geographical area of your concern involving in-depth overt and covert research being conducted resulting in fact driven reporting you can rely on.',
          },
        ]
      }, 
      {
        name:<p className="self-start font-bold">Investigations</p>, 
        icon:<UndercoverOperations width={size} height={size} />,
        content: <p className="text-sm">We investigate your specific problem are experienced in correct evidence gathering procedures and are aware of the complex skills required to ensure that the integrity of a company is never placed in doubt.</p>,
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
    <div className="flex flex-col items-center justify-center w-full bg-white overflow-clip">
      <Hero>
        <motion.div 
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          custom={1}
          className="relative z-10 flex flex-col justify-center w-full px-6 text-white">
          <div className="flex flex-col items-center justify-center gap-8 desktop:gap-4">
            <div className="absolute -top-20 w-full h-screen bg-gradient-radial from-background-dark/20 to-background-dark z-[2]"></div>
            <div className="absolute -top-20 left-0 grid w-full h-screen grid-cols-7 z-[1] ">
              {
                blockCount.fill(null).map((_, index) => <div ref={(el) => blockRef.current[index] = el} key={index} className='block border border-background-light/5'></div>)
              }
            </div>
            <h1 className='z-10 text-xl font-bold mobile:text-center mobile:text-3xl tablet:text-center tablet:text-3xl'>DMRS Thailand</h1>
            <Button variant="outline" size="sm" className="w-full mobile:fit tablet:w-fit z-10">Services</Button>
          </div>
        </motion.div>
      </Hero>

      {/* DMRS Thailand section */}
      <section className="navTrigger">
        <div 
          className="relative flex flex-col w-full gap-6 px-6 py-8 h-fit mobile:py-10 mobile:px-12 mobile:h-fit mobile:flex-col tablet:items-center tablet:px-12 tablet:flex-row laptop:p-20 laptop:gap-24 desktop:min-h-screen desktop:gap-20 desktop:px-24">
          <div className="flex w-full h-[300px] bg-gray-200 rounded-tl-[2rem] rounded-br-[2rem] tablet:h-[calc((3/5)*100vh)] tablet:w-1/2 laptop:w-1/2 tablet:rounded-tl-[4rem] tablet:rounded-br-[4rem] overflow-hidden">
            <img src="https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full w-full object-cover"/>
          </div>
          <img src="/images/thailand-map.png" alt="" className='absolute opacity-50 h-full brightness-90 z-0 top-0 hidden mobile:block laptop:right-[20%]' />

          <motion.div 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={1}
            className="z-10 flex flex-col justify-center w-full gap-4 mobile:w-full mobile:gap-4 tablet:w-1/2 tablet:gap-10">
            <h2 className="font-bold text-lg mobile:text-xl tablet:text-xl">Dan Murdoch Risk Services <strong className="font-bold text-primary-300 text-lg mobile:text-2xl tablet:text-2xl">Thailand.</strong></h2>
            <div className="flex flex-col gap-4 text-xs mobile:text-sm laptop:text-sm desktop:text-base">
              <p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Thailand</strong> Co. Limited is based in Thailand with staff also in the Philippines, Australia, Hong Kong and China with trusted and verified agents in many global locations.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="relative flex flex-col w-[90%] gap-6 px-6 py-8 h-fit items-center mobile:py-10 mobile:px-12 mobile:h-fit mobile:flex-col tablet:items-center tablet:px-12 tablet:flex-row laptop:p-20 laptop:gap-24 laptop:w-full desktop:w-[90%] desktop:min-h-screen desktop:gap-20 desktop:px-24">
          <div className="w-full tablet:grid-cols-2 tablet:gap-16 laptop:gap-16 desktop:gap-10">
            <motion.div 
              variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={1}
              className="grid grid-cols-2 items-center w-full gap-y-20 gap-x-5">
              <>
                <h1 className="text-md font-bold tablet:text-lg desktop:text-2xl">Trained Detectives</h1>
                <p>DMRS staff are <strong>trained detectives</strong> and <strong>intelligence analysts</strong> who use both objective and subjective thinking to <strong>gather online data and intelligence</strong> for many Fortune 500 companies worldwide.</p>
              </>
              <>
                <h1 className="text-md font-bold tablet:text-lg desktop:text-2xl">Premier and Innovative</h1>
                <p>Our facilities also offer <strong>premier and innovative investigative consultancy</strong> in all areas of corporate and personal requirements.</p>
              </>
              <>
                <h1 className="text-md font-bold tablet:text-lg desktop:text-2xl">Global Protection</h1>
                <p>DMRS is proud to be focused on the  <strong>protection of patients globally</strong> through our identification of risks concerned with the illicit trade in counterfeit, sub-standard and suspect medicines together with all associated risks to corporations tasked with the protection of consumers worldwide.</p>
              </>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services */}
      <motion.section 
        className="relative flex items-start w-full min-h-full px-6 pb-20 overflow-hidden align-middle mobile:px-6 tablet:px-12 tablet:mt-10 laptop:gap-10 desktop:px-[4.5rem]"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={1}
        >
        <div className="absolute left-0 grid w-full h-full -top-10 grid-cols-3 mobile:grid-cols-4 desktop:grid-cols-8">
          <GridFiller cellCount={40} cellClass={'border border-background-dark/5'} />
        </div>
        <div className="flex flex-col justify-start w-full gap-6 h-full">
          <div className="flex flex-col items-start gap-2 mobile:pl-6 tablet:pl-6 laptop:pl-12 desktop:pl-[4.5rem]">
            <h2 className="z-10 font-bold text-lg mobile:text-xl laptop:text-xl">Services</h2>
            <p
              className="z-10 text-sm mobile:text-xs desktop:text-base gap-1"
            >
              The services DMRS offers fall into three categories
              <motion.span className="font-bold" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={8}> INTELLIGENCE,</motion.span> 
              <motion.span className="font-bold" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={12}> INVESTIGATIONS,</motion.span> 
              <motion.span className="font-bold" variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{once:true}} custom={16}> RESEARCH.</motion.span> 
            </p>
          </div>
          <div className="flex flex-row items-start justify-start h-fit mobile:px-6 tablet:px-6 laptop:px-12 desktop:px-[4.5rem]">
            <motion.div 
              className="z-10 flex flex-col w-full gap-8 fill-black mobile:flex mobile:flex-col tablet:grid tablet:justify-center tablet:grid-cols-2 tablet:flex-col laptop:grid-cols-2 desktop:grid-cols-3"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{once:true}}
              custom={20}
            >
              {services.map((item, index) => <Services key={index} name={item.name} icon={item.icon} content={item.content} subContents={item.subContent}/> )}
            </motion.div>
          </div>
        </div>

        
      </motion.section>

      {/* Other Services */}
      <section className="flex flex-col items-center justify-center w-full h-full gap-10 px-6 mb-10 tablet:px-12 desktop:px-[4.5rem]">
        <motion.div className="flex flex-col items-start gap-2 mobile:pl-5 tablet:pl-5 laptop:pl-10 desktop:pl-[4.5rem]"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        custom={4}
        >
          <h2 className="z-10 font-bold text-md mobile:text-xl laptop:text-xl">Other Services</h2>
          <p className="z-10 text-sm mobile:text-xs desktop:text-base">However, as an additional service to our partners, we offer further unique capabilities such as -</p>
          <OtherServices /> 
        </motion.div>
      </section>

    </div>
    
  )
}

export default Thailand