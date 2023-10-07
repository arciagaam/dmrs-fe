import Hero from '../../components/Hero'
import Button from '../../components/Button'
import DMRSimg from '../../assets/Australia-dots.png'
import Intelligence_img from '../../assets/intelligence-investigations.png'
import Australia_img from '../../assets/dmrs-australia-1.jpg'
import II_icon from '../../assets/intelligent-intelligence-icon.png'
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from 'react'
import 'animate.css';
import ColoredGrid from '../../components/ColoredGrid'
import { Link } from 'react-router-dom'

import { LuLightbulb } from 'react-icons/lu'
import { PiListMagnifyingGlassLight } from 'react-icons/pi'
import { PiGear, PiGearFill } from 'react-icons/pi'
import { SiDatabricks } from 'react-icons/si'

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

const Australia = () => {
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

  return (
    <div className="flex flex-col w-full bg-white">
      <Hero>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">

            <ColoredGrid />

            {/* actual hero */}
            <div className="z-10 flex flex-col items-center justify-center w-full gap-10 px-10 text-white">
              <motion.div
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }} className="flex flex-col items-center justify-center gap-2">
                <h1 className='z-10 text-center text-md tablet:text-lg laptop:text-xl hd:text-3xl'>
                  Dan Murdoch Risk Services
                </h1>
                <p className='text-sm text-center desktop:text-base hd:text-md'>(Australia)</p>
              </motion.div>
              <Button variant='outline'>Our Services</Button>
            </div>
          </div>
        </div>
      </Hero>


      {/* DMRS Australia */}
      <section className="relative gap-16 navTrigger tablet:z-12">

        <div className="flex flex-col w-full gap-6 px-6 py-8 h-fit mobile:py-10 mobile:px-12 mobile:h-fit mobile:flex-col tablet:items-center tablet:px-12 tablet:flex-row laptop:p-20 laptop:gap-24 desktop:min-h-screen desktop:gap-20 desktop:px-24">
          
          <motion.div
            initial={{ opacity: 0, x: 105 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex w-full h-[300px] bg-gray-200 rounded-tl-[2rem] rounded-br-[2rem] tablet:h-[calc((3/5)*100vh)] tablet:w-1/2 laptop:w-1/2 tablet:rounded-tl-[4rem] z-10 tablet:rounded-br-[4rem] overflow-hidden">
            <img src={Australia_img} alt="" className='object-cover w-full h-full' />
          </motion.div>
          <img src={DMRSimg} alt="" className="hidden top-0 tablet:absolute tablet:right-0 tablet:w-auto tablet:m-auto tablet:min-h-[600px] tablet:max-h-[850px] z-0 tablet:block" />

          <motion.div 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            custom={1}
            className="z-10 flex flex-col justify-center w-full gap-4 mobile:w-full mobile:gap-4 tablet:w-1/2 tablet:gap-10">
            <h2 className="text-lg font-bold mobile:text-xl tablet:text-xl">Dan Murdoch Risk Services <strong className="text-lg font-bold text-primary-300 mobile:text-2xl tablet:text-2xl">Australia.</strong></h2>
            <div className="flex flex-col gap-4 text-xs mobile:text-sm laptop:text-sm desktop:text-base">
              <p><strong className="text-accent-500">DMRS</strong> <strong className="text-primary-300">Australia</strong> Pty Ltd is the parent company for the operational division Dan Murdoch Risk Services (Thailand) Co. Limited.</p>
            </div>
          </motion.div>
          {/* <div className="flex flex-col w-full gap-10 tablet:z-10 tablet:w-full">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -105 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="font-bold text-md text-bg-dark laptop:text-xl">Dan Murdoch Risk Services</motion.p>

              <motion.p
                initial={{ opacity: 0, x: -105 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-lg font-bold text-primary-300 laptop:text-2xl">Australia</motion.p>

            </div>

            <motion.p
              initial={{ opacity: 0, x: -105 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-lg text-xs text-bg-dark tablet:z-10 tablet:text-sm">
              <strong>DMRS </strong>
              <strong className="text-primary-400">Australia </strong>
              Pty Ltd is the parent company for the operational division Dan Murdoch Risk Services (Thailand) Co. Limited.
            </motion.p>

          </div> */}
        </div>
        
      </section>

      {/* Services */}
      <section className='z-10 flex flex-col gap-10 p-8 overflow-hidden mobile:p-18 laptop:p-28 laptop:overflow-visible navTrigger'>
        <div className="flex flex-col justify-center w-full col-span-3 gap-5">
          <p className="font-bold text-center uppercase text-md laptop:text-xl text-bg-dark ">Who are Dan Murdoch Risk Services?</p>
          <p className="self-center max-w-5xl tablet:min-w-[565px] text-center text-xs text-bg-dark tablet:text-sm">
            <strong className="text-accent-800">DMRS </strong>
            <strong className="text-primary-400">Australia </strong>
            Pty Ltd Pty Ltd operates all services offered under the banners of DMRS, Dan Murdoch Risk Services, Your Intelligence Program, and DMRS VPN.
          </p>
        </div>
        
        <div className='grid grid-rows-3 gap-10 mobile:grid-cols-3 mobile:grid-rows-1' >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
            <div className="flex items-center justify-center h-20 aspect-square">
              <motion.div
                whileInView={{ scale: [1, 0.5, 1.3,1] }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                  times: [0, 1.5, 1]
                }}
              >
                <LuLightbulb size={60} />  
              </motion.div>
              
            </div>
            <p className='text-center'>Intelligence</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
            <div className="flex items-center justify-center h-20 aspect-square">
              
              <motion.div
                whileInView={{ scale: [1, 0.5, 1.3,1] }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                  times: [0, 1.5, 1]
                }}
              >
                <PiListMagnifyingGlassLight size={60} /> 
              </motion.div>
            </div>
            <p className='text-center'>Brand Identity</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
            <div className="flex items-center justify-center h-20 aspect-square">
              
              <motion.div
                whileInView={{ scale: [1, 0.5, 1.3,1] }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeIn",
                  times: [0, 1.5, 1]
                }}
              >
                <SiDatabricks size={60} />
              </motion.div>
            </div>
            <p className='text-center'>Data Collection</p>
          </motion.div>    
        </div>
        
      </section>


      {/* Intelligent Intelligence */}
      <section className="relative p-8 mobile:p-18 laptop:p-28 bg-background-dark">
        <div className="flex flex-col gap-10 mobile:flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
            className= 'flex justify-center'
          >
            <img src={II_icon} alt="" className="object-contain w-1/2 h-full mobile:w-auto" />  
          </motion.div>
          

          <div className="flex flex-col justify-center gap-3 text-center mobile:text-left">
            <p className="text-sm tablet:text-md laptop:text-lg ">
            <motion.div
              initial={{ opacity: 0, y: -80}}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn"}}
              viewport={{ once: true }}
            >
            <strong className="text-primary-300">Intelligent Intelligence</strong>
            </motion.div>
              
            </p>

            <p className="text-sm text-justify text-white tablet:text-base laptop:text-md">
            <motion.div
              initial={{ opacity: 0, y: 80}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.5, ease: "easeIn"}}
              viewport={{ once: true }}
            >
              Leads to thoughtful investigations and evidence-filled undercover operations resulting in a safer pharmaceutical environment globally.
            
            </motion.div>
              
            </p>
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="z-40 flex flex-col-reverse items-center w-full py-[20vh] tablet:flex-row">
        <div className="flex flex-col items-center flex-1 gap-5">
        {/* PiGear, PiGearFill  */}
          <h2 className='font-bold text-center text-md laptop:text-xl hd:text-xl'>See our <span className='text-primary-300'>services</span> in full.</h2>
          <Link to='/dmrs-fe/thailand#services_th'>
            <Button variant='outline'>Our Services</Button>
          </Link>
          
        </div>
      </section>

    </div>
  )
}

export default Australia