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
import { SiDatabricks } from 'react-icons/si'

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
      <section className="relative gap-16 px-10 pt-10 pb-10 navTrigger tablet:z-12">

        <div className="flex flex-col h-full w-full items-center p-10 gap-12 tablet:p-16 tablet:flex-row laptop:min-h-[768px] laptop:h-full laptop:gap-24 laptop:p-20 ">
          <div className="max-h-[350px] flex w-full tablet:z-10 tablet:w-full tablet:max-h-[500px] z-10  justify-center gap-5">
            <motion.div
              initial={{ opacity: 0, x: 105 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex">
              <img src={Australia_img} alt="" className='object-cover cover rounded-tl-[3.12rem] rounded-br-[3.12rem] h-full w-full' />
            </motion.div>
          </div>

          <div className="flex flex-col w-full gap-10 tablet:z-10 tablet:w-full">
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

          </div>
        </div>
        <img src={DMRSimg} alt="" className="hidden top-0 tablet:absolute tablet:right-0 tablet:w-auto tablet:m-auto tablet:min-h-[600px] tablet:max-h-[850px] tablet:z-0 tablet:block" />
      </section>

      {/* Services */}
      <section className='grid grid-cols-3 gap-10 p-[7.5rem] overflow-hidden laptop:overflow-visible laptop:flex-row navTrigger'>
        <div className="flex flex-col justify-center w-full col-span-3 gap-5">
          <p className="text-lg font-bold text-center uppercase laptop:text-xl text-bg-dark ">Who are Dan Murdoch Risk Services?</p>
          <p className="self-center max-w-5xl tablet:min-w-[565px] text-center text-xs text-bg-dark tablet:text-sm">
            <strong className="text-accent-800">DMRS </strong>
            <strong className="text-primary-400">Australia </strong>
            Pty Ltd Pty Ltd operates all services offered under the banners of DMRS, Dan Murdoch Risk Services, Your Intelligence Program, and DMRS VPN.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-start gap-2 px-5 py-10 border rounded-lg border-background-dark/05">
          <div className="flex items-center justify-center h-20 aspect-square">
            <LuLightbulb size={60} />
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
            <PiListMagnifyingGlassLight size={60} />
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
            <SiDatabricks size={60} />
          </div>
          <p className='text-center'>Data Collection</p>
        </motion.div>  
      </section>


      {/* Intelligent Intelligence */}
      <section className="relative p-10 px-[7.5rem] bg-background-dark">
        <div className="flex gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut"}}
            viewport={{ once: true }}
          >
          <img src={II_icon} alt="" className="object-contain h-full" />  
          </motion.div>
          

          <div className="flex flex-col justify-center gap-3 text-center tablet:text-left">
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
          <h2 className='font-bold text-center text-md desktop:text-lg hd:text-xl'>See our <span className='text-primary-300'>services</span> in full.</h2>
          <Link to='/dmrs-fe/thailand#services_th'>
            <Button variant='outline'>Our Services</Button>
          </Link>
          
        </div>
      </section>

    </div>
  )
}

export default Australia