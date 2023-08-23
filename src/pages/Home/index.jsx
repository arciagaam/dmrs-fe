import React, { useEffect, useRef } from 'react'
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const animatedCircle = useRef(null);

  useEffect(() => {
    const el = animatedCircle.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: '55px 60%',
        end: '580px 40%',
        scrub: true,
        // markers: true
      }
    });

    tl.to(el, {
      y:700,
      x:160,
      scale:100,
      backgroundColor: '#1e1e1e'
    });
  }, [])

  
  return (
    <div className="flex flex-col w-full bg-white tablet:">
      <Hero>
        <div className="flex items-center justify-center w-full text-white">
          HERO SECTION
        </div>
      </Hero>

      {/* WHO ARE WE SECTION */}
      <div className="flex">
        <div className="flex flex-col flex-1 sticky top-16 items-center justify-center max-h-[calc(100vh-4rem)] gap-1">
          <h2 className='text-2xl font-bold'>WHO ARE WE?</h2>
          <p className='text-center text-md'>Discover who we are and be part of our <span className='font-bold text-purple-400'>JOURNEY</span></p>
        </div>

        <div className="flex-1">

          <StickyScrollItem>
            <div className="flex flex-col justify-center h-full gap-5">
              <h2 className='text-2xl font-bold'>DMRS <span className='text-testGreen'>Australia</span></h2>
              <p>Dan Murdoch Risk Services (Australia) Pty Ltd is the parent company of our operational division Dan Murdoch Risk Services (Thailand) Limited.</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="flex flex-col justify-center h-full gap-5">
              <h2 className='text-2xl font-bold'>DMRS <span className='text-testGreen'>Thailand</span></h2>
              <p>Dan Murdoch Risk Services (Thailand) Co. Ltd. staff are trained detectives and intelligence analysts who use both objective and subjective thinking to gather manual online data leading to intelligence for many Fortune 500 companies worldwide.</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full gap-5">
              <h2 className='relative text-2xl font-bold text-testGreen after:absolute after:top-[15px] after:left-[231px] after:w-3 after:bg-white after:h-3'>Specialization</h2>

              <div ref={animatedCircle} className="animated-circle absolute top-[194px] left-[232.3px] h-[0.65rem] rounded-full aspect-square bg-testGreen"></div>
              <p className='z-[1]'>We specialize in pharmaceuticals and the protection of and identifying risks associated with medicines worldwide.</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

        </div>
      </div>

      {/* VISION AND MISSION SECTION */}

      <div className="flex min-h-[calc(100vh-4rem)] z-[1] overflow-hidden">
        <div className="flex items-center justify-center w-1/2">
          <div className="flex flex-col">
            <p className='font-bold text-9xl'>VISION</p>
            <p className='font-bold text-9xl'>AND</p>
            <p className='font-bold text-9xl'>MISSION</p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/2 gap-10 p-20 text-white">

          <div className="grid auto-cols-[minmax(calc(100%),_auto)] grid-flow-col overflow-x-auto gap-16">
            <div className="flex flex-col gap-3 p-10">
              <h2 className='text-2xl font-bold text-testGreen'>VISION</h2>
              <p>Dan Murdoch Risk Services will be the preferred company of choice for online intelligence, investigative consultancy, brand protection and business intelligence advice worldwide offering beneficial solutions for all corporate and personal problems.</p>
            </div>
            <div className="flex flex-col gap-3 p-10">
              <h2 className='text-2xl font-bold text-purple-400'>MISSION</h2>
              <p>Dan Murdoch Risk Services will offer and deliver to the corporate world and the general public a complete range of business services from intelligence strategies and a true investigative consultancy to proactive solutions and risk management strategies for internal and external problems facing companies and individuals worldwide.</p>
            </div>
          </div>

          <div className="flex gap-1">
            <div className="h-[20px] aspect-square rounded-full bg-green-400"></div>
            <div className="h-[20px] aspect-square rounded-full bg-purple-400"></div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home