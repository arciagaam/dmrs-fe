import React, { useEffect, useRef } from 'react'
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextMarquee from './components/TextMarquee'
import Button from '../../components/Button'
import WhatWeDoItem from './components/WhatWeDoItem'
import WhatWeDo from './components/WhatWeDo'
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const animatedCircle = useRef(null);
  const animatedCircleTrigger = useRef(null)
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
    const el = animatedCircle.current;
    const circleTrigger = animatedCircleTrigger.current;

    const mm = gsap.matchMedia();

    // mobile
    mm.add('(max-width:481px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleTrigger,
          start: '-250px 60%',
          end: '25% 40%',
          scrub: true,
          // markers: true
        }
      });

      tl.to(el, {
        opacity: 100,
        scale: 250,
      });
    });

    // tablet
    mm.add('(max-width:641px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleTrigger,
          start: '-250px 60%',
          end: '25% 40%',
          scrub: true,
          // markers: true
        }
      });

      tl.to(el, {
        opacity: 100,
        scale: 250,
        y: 60,
      });
    });

    // laptop
    mm.add('(min-width:1024px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleTrigger,
          start: 'top 60%',
          end: '25% 40%',
          scrub: true,
          // markers: true
        }
      });

      tl.to(el, {
        x: 185,
        y: 0,
        opacity: 100,
        scale: 285,
      });
    });

    // desktop
    mm.add('(min-width:1280px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleTrigger,
          start: 'top 60%',
          end: '25% 40%',
          scrub: true,
          // markers: true
        }
      });

      tl.to(el, {
        x: 150,
        y: 0,
        opacity: 100,
        scale: 250,
      });
    });

    // desktop 1920
    mm.add('(min-width:1920px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: circleTrigger,
          start: 'top 60%',
          end: '25% 40%',
          scrub: true,
          // markers: true
        }
      });

      tl.to(el, {
        x: 150,
        y: 0,
        opacity: 100,
        scale: 350,
      });
    });

    return () => mm.kill();

  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const selectedBlock = blockRef.current[Math.floor(Math.random() * 25)];
      toggleBlock(selectedBlock);
    }, 5000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="flex flex-col w-full bg-white overflow-clip">
      <Hero>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <div className="absolute w-full h-full bg-gradient-radial from-background-dark/20 to-background-dark z-[2]"></div>
            <div className="absolute top-0 left-0 grid w-full h-full grid-cols-7 z-[1] ">
              {
                blockCount.fill(null).map((_, index) => <div ref={(el) => blockRef.current[index] = el} key={index} className='block border border-background-light/5'></div>)
              }
            </div>
            <div className="z-10 flex flex-col items-center justify-center w-full gap-10 text-white">
              <div className="flex flex-col justify-center">
                <h1 className='z-10 text-xl'>Dan Murdoch Risk Services</h1>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className='z-10 text-sm'>Providing Global Corporations with</p>
                  <TextMarquee />
                </div>
                <div className="flex gap-3">
                  <Button variant='default' size='xs' className='w-fit'>
                    Get Started
                  </Button>
                  <Button variant='outline' size='xs' className='w-fit'>
                    Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* WHO ARE WE SECTION */}
      <section className="flex tablet:flex-col navTrigger">
        <div className="flex flex-col flex-1 sticky top-16 z-10 items-center justify-center max-h-[calc(100vh-4rem)] gap-1 tablet:py-5 tablet:shadow-md tablet:z-10">
          <h2 className='text-2xl font-bold desktop:text-xl'>WHO ARE WE?</h2>
          <p className='text-sm text-center desktop:text-sm'>Discover who we are and be part of our <span className='font-bold text-accent-500'>JOURNEY</span></p>
        </div>

        <div className="flex flex-col flex-1 tablet:gap-16">
          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full">
              <img src="/australia-map.png" alt="" className='absolute top-0 right-[60%] opacity-50 h-full brightness-90' />

              <div className="z-10 flex flex-col justify-center h-full gap-5">
                <h2 className='text-2xl font-bold desktop:text-xl'>DMRS <span className='text-primary-300'>Australia</span></h2>
                <p className='text-sm desktop:text-sm'>Dan Murdoch Risk Services (Australia) Pty Ltd is the parent company of our operational division Dan Murdoch Risk Services (Thailand) Limited.</p>
                <button className='w-fit'>Link Button</button>
              </div>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full">
              <img src="/thailand-map.png" alt="" className='absolute top-0 right-[85%] opacity-50 h-full brightness-90' />

              <div className='z-10 flex flex-col justify-center h-full gap-5'>
                <h2 className='text-2xl font-bold desktop:text-xl'>DMRS <span className='text-primary-300'>Thailand</span></h2>
                <p className='text-sm desktop:text-sm'>Dan Murdoch Risk Services (Thailand) Co. Ltd. staff are trained detectives and intelligence analysts who use both objective and subjective thinking to gather manual online data leading to intelligence for many Fortune 500 companies worldwide.</p>
                <button className='w-fit'>Link Button</button>
              </div>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full gap-5 max-w-[1080px]">
              <h2 className='relative text-2xl font-bold text-primary-300 desktop:text-xl'>Specialization</h2>
              <p className='text-sm desktop:text-sm'>We specialize in pharmaceuticals and the protection of and identifying risks associated with medicines worldwide.</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

        </div>
      </section>

      {/* VISION AND MISSION SECTION */}
      <section className="flex min-h-[calc(100vh-4rem)] z-[1] tablet:flex-col">

        <div className="flex items-center justify-center w-1/2 tablet:hidden">
          <div className="flex flex-col">
            <p className='font-bold text-9xl laptop:text-3xl'>VISION</p>
            <p className='font-bold text-9xl laptop:text-3xl'>AND</p>
            <p className='font-bold text-9xl laptop:text-3xl'>MISSION</p>
          </div>
        </div>

        <div ref={animatedCircleTrigger} className="relative flex flex-col justify-center w-1/2 gap-1 p-20 text-white tablet:w-full laptop:p-10">

          <div ref={animatedCircle} className="absolute h-1 opacity-0 left-[50%] top-[50%] rounded-full animated-circle aspect-square bg-background-dark"></div>

          <div className="grid auto-cols-[minmax(calc(100%),_auto)] grid-flow-col tablet:auto-rows-[minmax(fit,_auto)] tablet:grid-flow-row tablet:gap-10 overflow-x-auto gap-16 z-10">
            <div className="flex flex-col gap-3 p-10 tablet:p-0">
              <h2 className='text-2xl font-bold text-primary-300'>VISION</h2>
              <p>Dan Murdoch Risk Services will be the preferred company of choice for online intelligence, investigative consultancy, brand protection and business intelligence advice worldwide offering beneficial solutions for all corporate and personal problems.</p>
            </div>
            <div className="flex flex-col gap-3 p-10 tablet:p-0">
              <h2 className='text-2xl font-bold text-accent-500'>MISSION</h2>
              <p>Dan Murdoch Risk Services will offer and deliver to the corporate world and the general public a complete range of business services from intelligence strategies and a true investigative consultancy to proactive solutions and risk management strategies for internal and external problems facing companies and individuals worldwide.</p>
            </div>
          </div>

          <div className="z-10 flex gap-1 tablet:mt-10">
            <div className="h-[20px] aspect-square rounded-full bg-green-400"></div>
            <div className="h-[20px] aspect-square rounded-full bg-accent-500"></div>
          </div>

        </div>
      </section>

      <section className='z-10 flex flex-col'>

        <div className="flex items-center w-full gap-16 p-20 text-white bg-background-dark">
          <h2 className='text-xl font-bold whitespace-nowrap'>What we do?</h2>

          <div className="flex flex-col gap-3">
            <p className='text-sm'>The services DMRS offers fall into three broad areas, labeled as Intelligence, Investigations,
              and Research.
            </p>
            <p className='text-sm'>
              While our geographical areas of operation are Asia-wide and Australia we conduct
              intelligence monitoring and investigations worldwide using our own staff and trusted
              associates.
            </p>
          </div>
        </div>
        
        <WhatWeDo/>

      </section>

    </div>
  )
}

export default Home