import React, { useEffect, useRef } from 'react'
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TextMarquee from './components/TextMarquee'
import Button from '../../components/Button'
import WhatWeDo from './components/WhatWeDo'
import { Link } from 'react-router-dom'
import GridFiller from './components/GridFiller'
import VisionMission from './components/VisionMission'
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
    // mm.add('(max-width:481px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: circleTrigger,
    //       start: '-250px 60%',
    //       end: '25% 40%',
    //       scrub: true,
    //       // markers: true
    //     }
    //   });

    //   tl.to(el, {
    //     opacity: 100,
    //     scale: 250,
    //   });
    // });

    // tablet
    // mm.add('(max-width:641px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: circleTrigger,
    //       start: '-250px 60%',
    //       end: '25% 40%',
    //       scrub: true,
    //       // markers: true
    //     }
    //   });

    //   tl.to(el, {
    //     opacity: 100,
    //     scale: 250,
    //     y: 60,
    //   });
    // });

    // laptop
    // mm.add('(max-width:1024px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: circleTrigger,
    //       start: 'top 60%',
    //       end: '25% 40%',
    //       scrub: true,
    //       // markers: true
    //     }
    //   });

    //   tl.to(el, {
    //     x: 185,
    //     y: 0,
    //     opacity: 100,
    //     scale: 285,
    //   });
    // });

    // desktop
    // mm.add('(max-width:1280px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: circleTrigger,
    //       start: 'top 60%',
    //       end: '25% 40%',
    //       scrub: true,
    //       // markers: true
    //     }
    //   });

    //   tl.to(el, {
    //     x: 150,
    //     y: 0,
    //     opacity: 100,
    //     scale: 250,
    //   });
    // });

    // desktop 1920
    // mm.add('(max-width:1920px)', () => {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: circleTrigger,
    //       start: 'top 60%',
    //       end: '25% 40%',
    //       scrub: true,
    //       // markers: true
    //     }
    //   });

    //   tl.to(el, {
    //     x: 150,
    //     y: 0,
    //     opacity: 100,
    //     scale: 350,
    //   });
    // });

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
              <img src="/public/australia-map.png" alt="" className='absolute top-0 right-[60%] opacity-50 h-full brightness-90' />

              <div className="z-10 flex flex-col justify-center h-full gap-5">
                <h2 className='text-2xl font-bold desktop:text-xl'>DMRS <span className='text-primary-300'>Australia</span></h2>
                <p className='text-sm desktop:text-sm'>Dan Murdoch Risk Services (Australia) Pty Ltd is the parent company of our operational division Dan Murdoch Risk Services (Thailand) Limited.</p>
                <button className='w-fit'>Link Button</button>
                <Button size="sm" variant='default' className=" w-fit bg-accent-400 ring-accent-400">
                  <Link to="/dmrs-fe/dmrs/australia">
                    Go to DMRS Australia
                  </Link>
                </Button>
              </div>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full">
              <img src="/public/thailand-map.png" alt="" className='absolute top-0 right-[85%] opacity-50 h-full brightness-90' />

              <div className='z-10 flex flex-col justify-center h-full gap-5'>
                <h2 className='text-2xl font-bold desktop:text-xl'>DMRS <span className='text-primary-300'>Thailand</span></h2>
                <p className='text-sm desktop:text-sm'>Dan Murdoch Risk Services (Thailand) Co. Ltd. staff are trained detectives and intelligence analysts who use both objective and subjective thinking to gather manual online data leading to intelligence for many Fortune 500 companies worldwide.</p>
                <Button size="sm" variant='default' className=" w-fit bg-accent-400 ring-accent-400">
                  <Link to="/dmrs-fe/dmrs/thailand">
                    Go to DMRS Thailand
                  </Link>
                </Button>
              </div>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full gap-5 max-w-[1080px]">
              <h2 className='relative text-2xl font-bold text-primary-300 desktop:text-xl'>Specialization</h2>
              <p className='text-sm desktop:text-sm'>We specialize in pharmaceuticals and the protection of and identifying risks associated with medicines worldwide.</p>
              <Button size="sm" variant='default' className=" w-fit bg-accent-400 ring-accent-400">
                <Link to="/dmrs-fe">Get Started</Link>
              </Button>
            </div>
          </StickyScrollItem>

        </div>
      </section>

      {/* VISION AND MISSION SECTION */}
      <section className="relative flex p-20 z-[1] max-h-screen tablet:flex-col overflow-hidden">
        <div className="absolute top-0 left-0 flex w-full h-full">
          <div className="relative w-full h-full">

            <div className="absolute left-0 grid w-3/4 h-full grid-cols-7">
              <GridFiller cellCount={35} cellClass={'border border-background-dark/5'} />
            </div>

            <div className="absolute left-0 w-3/4 h-full bg-gradient-radial from-transparent via-white to-white"></div>

          </div>
        </div>

        <VisionMission />
      </section>

      <section className='relative flex gap-20 px-20'>

        <div className="absolute top-0 left-0 flex w-full h-full">
          <div className="relative w-full h-full">

            <div className="absolute right-0 grid w-3/4 h-full grid-cols-7">
              <GridFiller cellCount={35} cellClass={'border border-background-dark/5'} />
            </div>

            <div className="absolute right-0 w-3/4 h-full bg-gradient-radial from-transparent to-white"></div>

          </div>
        </div>


        <div className="z-10 flex flex-col items-center w-[40%] gap-8">

          <div className="flex items-center">
            <img src="/sheild-dynamic-color.png" className='flex-1 h-[6rem]' alt="" />
            <h2 className='text-xl font-bold'> <span className='whitespace-nowrap'> What are <span className="text-primary-300">we</span></span> offering?</h2>
          </div>


          <div className="flex flex-col gap-3">
            <p className='text-sm text-justify'>The services DMRS offers fall into three broad areas, labeled as <strong>Intelligence</strong>, <strong>Investigations</strong>,
              and <strong>Research</strong>.
            </p>
            <p className='text-sm text-justify'>
              While our geographical areas of operation are Asia-wide and Australia we conduct
              intelligence monitoring and investigations worldwide using our own staff and trusted
              associates.
            </p>
          </div>
        </div>

        <WhatWeDo />

      </section>

    </div>
  )
}

export default Home