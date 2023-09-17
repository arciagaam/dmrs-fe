import React, { useEffect, useRef } from 'react'
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'
import TextMarquee from './components/TextMarquee'
import Button from '../../components/Button'
import WhatWeDo from './components/WhatWeDo'
import { Link } from 'react-router-dom'
import GridFiller from './components/GridFiller'
import VisionMission from './components/VisionMission'

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

            {/* background vignette */}
            <div className="absolute w-full h-full bg-gradient-radial from-background-dark/20 to-background-dark z-[2]"></div>
            
            {/* generate blocks */}
            <div className="absolute top-0 left-0 grid w-full h-full grid-cols-7 z-[1] ">
              {
                blockCount.fill(null).map((_, index) => <div ref={(el) => blockRef.current[index] = el} key={index} className='block border border-background-light/5'></div>)
              }
            </div>

            {/* actual hero */}
            <div className="z-10 flex flex-col items-center justify-center w-full gap-10 px-10 text-white">
              <div className="flex flex-col items-center justify-center">
                <h1 className='z-10 text-center text-md tablet:text-lg laptop:text-xl hd:text-3xl'>Dan Murdoch Risk Services</h1>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center justify-center gap-1">
                  <p className='z-10 text-xs laptop:text-sm hd:text-lg'>Providing Global Corporations with</p>
                  <TextMarquee />
                </div>
                <div className="flex gap-3">
                  <Link to='contact'>
                    <Button variant='default' size='xs' className='w-fit'>
                      Get Started
                    </Button>
                  </Link>

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
      <section className="flex flex-col gap-16 p-5 py-10 overflow-clip laptop:flex-row navTrigger">
        <div className="flex flex-col items-center justify-center gap-1 laptop:sticky laptop:flex-1 laptop:top-16 laptop:max-h-[calc(100vh-4rem)]">
          <h2 className='text-lg font-bold text-center desktop:text-xl hd:text-3xl'>WHO ARE WE?</h2>
          <p className='text-sm text-center desktop:text-base hd:text-md'>Discover who we are and be part of our <span className='font-bold text-accent-500'>JOURNEY</span></p>
        </div>

        <div className="flex flex-col flex-1 gap-16">
          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full">
              <img src="./images/australia-map.png" alt="" className='absolute top-[-25%] right-[-25%] h-full brightness-90 tablet:right-0 tablet:h-[15rem]' />

              <div className="z-10 flex flex-col justify-center h-full gap-5">
                <h2 className='text-xl font-bold desktop:text-2xl hd:text-3xl'>DMRS <span className='text-primary-300'>Australia</span></h2>
                <p className='text-xs desktop:text-sm hd:text-md'>Dan Murdoch Risk Services (Australia) Pty Ltd is the parent company of our operational division Dan Murdoch Risk Services (Thailand) Limited.</p>
                <Button size="xs" variant='default' className=" w-fit !bg-accent-400 !ring-accent-400 text-white">
                  <Link to="/dmrs-fe/dmrs/australia">
                    Go to DMRS Australia
                  </Link>
                </Button>
              </div>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full">
              <img src="./images/thailand-map.png" alt="" className='absolute top-[-10%] right-[-25%] h-full brightness-90 tablet:right-5 tablet:h-[20rem]' />

              <div className='z-10 flex flex-col justify-center h-full gap-5'>
                <h2 className='text-xl font-bold desktop:text-2xl'>DMRS <span className='text-primary-300'>Thailand</span></h2>
                <p className='text-xs desktop:text-sm hd:text-md'>Dan Murdoch Risk Services (Thailand) Co. Ltd. staff are trained detectives and intelligence analysts who use both objective and subjective thinking to gather manual online data leading to intelligence for many Fortune 500 companies worldwide.</p>
                <Button size="xs" variant='default' className=" w-fit !bg-accent-400 !ring-accent-400 !text-white">
                  <Link to="/dmrs-fe/dmrs/thailand">
                    Go to DMRS Thailand
                  </Link>
                </Button>
              </div>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="relative flex flex-col justify-center h-full gap-5 max-w-[1080px]">
              <h2 className='relative text-lg font-bold text-primary-300 desktop:text-2xl'>Specialization</h2>
              <p className='text-xs desktop:text-sm hd:text-md'>We specialize in pharmaceuticals and the protection of and identifying risks associated with medicines worldwide.</p>
              <Button size="xs" variant='default' className=" w-fit bg-accent-400 ring-accent-400">
                <Link to="/dmrs-fe">Get Started</Link>
              </Button>
            </div>
          </StickyScrollItem>

        </div>
      </section>

      {/* VISION AND MISSION SECTION */}
      <section className="relative flex p-5 py-10 z-[1]">
        
        {/* grid bg */}
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

      <section className='relative flex flex-col gap-10 p-5 py-10 laptop:flex-row'>

        {/* grid background */}
        <div className="absolute top-0 left-0 flex w-full h-full">
          <div className="relative w-full h-full">

            <div className="absolute right-0 grid w-3/4 h-full grid-cols-7">
              <GridFiller cellCount={35} cellClass={'border border-background-dark/5'} />
            </div>

            <div className="absolute right-0 w-3/4 h-full bg-gradient-radial from-transparent to-white"></div>

          </div>
        </div>


        <div className="z-10 flex flex-col items-center gap-8 laptop:w-[45%]">

          <div className="flex flex-col items-center hd:flex-row hd:gap-5">
            <img src="./images/sheild-dynamic-color.png" className='w-1/4' alt="" />
            <h2 className='text-lg font-bold text-center hd:text-2xl hd:text-left'> What are <span className="text-primary-300">we</span> offering?</h2>
          </div>


          <div className="flex flex-col gap-3 text-xs tablet:text-sm tablet:w-3/4 laptop:w-full laptop:px-5 laptop:gap-5 hd:text-base hd:gap-10">
            <p className='text-justify'>The services DMRS offers fall into three broad areas, labeled as <strong>Intelligence</strong>, <strong>Investigations</strong>,
              and <strong>Research</strong>.
            </p>
            <p className='text-justify'>
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