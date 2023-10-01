import Hero from '../../components/Hero'
import Button from '../../components/Button'
import DMRSimg from '../../assets/Australia-dots.png'
import Intelligence_img from '../../assets/intelligence-investigations.png' 
import Australia_img from '../../assets/dmrs-australia-1.jpg' 
import II_icon from '../../assets/intelligent-intelligence-icon.png'
import IntelligenceMb_img from '../../assets/intelligent-investigations-mb.png'
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from 'react'
import Animate from './components/Animate.jsx'
import 'animate.css';


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

  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-full bg-white"> 
      <div className="tablet:z-10">
        <Hero>
          <div className="relative flex flex-col items-center justify-center w-full gap-3 text-white">
            <div className="absolute -top-20 w-full h-screen bg-gradient-radial from-background-dark/20 to-background-dark z-[2]"></div>
            <div className="absolute -top-20 left-0 grid w-full h-screen grid-cols-7 z-[1] ">
              {
                blockCount.fill(null).map((_, index) => <div ref={(el) => blockRef.current[index] = el} key={index} className='block border border-background-light/5'></div>)
              }
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className='z-10 text-3xl font-bold text-center'>DMRS Australia</h1>
              <Button variant="outline" size="sm" className="z-10">Services</Button>
            </div>
          </div>
        </Hero>  
      </div>
      

      {/* DMRS Australia */}
      <section className="relative navTrigger tablet:z-12">
        
        <div className="flex overflow-hidden flex-col h-full w-full items-center p-10 gap-12 tablet:p-16 tablet:flex-row laptop:min-h-[768px] laptop:h-full laptop:gap-24 laptop:p-20 ">
          <div className="max-h-[350px] flex w-full tablet:z-10 tablet:w-full tablet:max-h-[500px] z-10  justify-center gap-5">
            <Animate animationClass='animate__fadeInLeftBig'>
              <img src={Australia_img} alt="" className='object-cover cover rounded-tl-[3.12rem] rounded-br-[3.12rem] h-full w-full' />     
            </Animate>    
          </div>  
         
          <div className="flex flex-col w-full gap-10 tablet:z-10 tablet:w-full">
            <div>
              <Animate animationClass='animate__fadeInTopRight'>
                <p className="font-bold text-md text-bg-dark laptop:text-xl">Dan Murdoch Risk Services</p>  
              </Animate>

              <Animate animationClass='animate__fadeInRightBig'>
                <p className="text-lg font-bold text-primary-300 laptop:text-2xl">Australia</p>  
              </Animate>
              
            </div>
            <Animate animationClass='animate__fadeInBottomRight'>
              <p className="max-w-lg text-xs text-bg-dark tablet:z-10 tablet:text-sm">
                <strong className="text-accent-800">DMRS </strong> 
                <strong className="text-primary-400">Australia </strong> 
                Pty Ltd is the parent company for the operational division Dan Murdoch Risk Services (Thailand) Co. Limited.
              </p>  
            </Animate>
            
          </div>  
        </div>  
        <img src={DMRSimg} alt="" className="hidden tablet:absolute tablet:top-0 tablet:bottom-0 tablet:right-0 tablet:w-auto tablet:m-auto tablet:min-h-[600px] tablet:max-h-[850px] tablet:z-0 tablet:block animate__animated animate__pulse"/>
      </section>

      {/* Intelligent Intelligence */}
      <section className="relative tablet:z-10">
        <div className="flex h-full w-full items-center gap-[6rem] p-7 tablet:p-20">
          <div className="flex flex-col tablet:flex-row tablet:p-10 laptop:p-20 justify-center items-center w-full max-h-[450px] p-10 gap-2 mobile:gap-5 rounded-[3.12rem] bg-black">
            <div className='w-full'>
              <Animate animationClass='animate__bounceIn'>
                <img src={II_icon} alt="" className="object-contain"/>  
              </Animate>
              
            </div>
            
            <Animate animationClass='animate__bounceIn'> 
              <div className="flex flex-col justify-center text-center tablet:text-left">
                <p className="text-sm tablet:text-md laptop:text-lg ">
                  <strong className="text-primary-300">Intelligent Intelligence</strong>
                </p>
                <p className="text-sm tablet:text-md laptop:text-lg text-accent-50 ">
                  <strong>leads to thoughtful investigations and evidence-filled undercover operations resulting in a safer pharmaceutical environment globally.</strong>
                </p>    
              </div>  
            </Animate>
            
          </div>
        </div>  
      </section>

      {/* Services */}
      <section className=''> 
        <div className="flex flex-col h-full laptop:h-[95vh] laptop:min-h-[740px] laptop:min-w-[450px]">
          <div className="flex flex-col justify-center w-full gap-5 px-10 pt-10 pb-5 laptop:px-20 laptop:pt-20 laptop:pb-10">
            <p className="text-lg font-bold text-center uppercase laptop:text-xl text-bg-dark ">Who are Dan Murdoch Risk Services?</p>
            <p className="self-center max-w-5xl tablet:min-w-[565px] text-center text-xs text-bg-dark tablet:text-sm">
              <strong className="text-accent-800">DMRS </strong> 
              <strong className="text-primary-400">Australia </strong> 
              Pty Ltd Pty Ltd operates all services offered under the banners of DMRS, Dan Murdoch Risk Services, Your Intelligence Program, and DMRS VPN.
            </p>
          </div>
          
          <div className="flex w-full min-h-[450px] tablet:h-full">
            <div className="flex flex-col items-center justify-center w-full bg-no-repeat bg-bottom bg-cover bg-[url('assets/IntelligentIntelligence.png')]">
              
            </div>  

          </div>
          
        </div>
      </section>

      {/* Brochure */} 
      <section>
        <div className="flex flex-col-reverse items-center w-full tablet:min-h-[200px] h-full tablet:flex-row">
          <div className="flex flex-col items-center w-auto h-full gap-5 p-10 mr-5 tablet:mr-0 laptop:p-20 laptop:pr-5 tablet:items-start">
            <p className="font-bold text-center uppercase laptop:text-2xl text-md tablet:text-lg tablet:text-left text-bg-dark ">Intelligence Investigations</p>
            <Button variant="default" size="sm" >See Brochure</Button>
          </div>

          <div className="flex flex-col w-auto h-full laptop:h-full">
            <img src={Intelligence_img} alt="" className="hidden w-full h-full tablet:block"/>
            <img src={IntelligenceMb_img} alt="" className="w-full tablet:hidden"/>
          </div>
        </div>  
      </section>
    </div>
  )
}

export default Australia