
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'
import TextMarquee from './components/TextMarquee'
import Button from '../../components/Button'
import WhatWeDo from './components/WhatWeDo'
import GridFiller from './components/GridFiller'
import ColoredGrid from '../../components/ColoredGrid'
import VerticalProgressPoint from '../../components/VerticalProgressPoint'
import StickyScrollContent from './components/StickyScrollContent'
import Rocket from './components/Rocket'
import { Link } from 'react-router-dom'
import { FaEye, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import VerticalProgress from '../../components/VerticalProgress'


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
      duration: .5
    }
  })
}

const Home = () => {

  return (
    <div className="flex flex-col w-full bg-white overflow-clip">

      <Hero>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">

            <ColoredGrid />

            {/* actual hero */}
            <div className="z-10 flex flex-col items-center justify-center w-full gap-10 px-10 text-white">
              <div className="flex flex-col items-center justify-center">
                <motion.h1
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className='z-10 text-center text-md tablet:text-lg laptop:text-xl hd:text-3xl'>Dan Murdoch Risk Services</motion.h1>
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
      <section className="flex flex-col gap-16 px-10 pt-10 overflow-hidden laptop:overflow-visible laptop:flex-row navTrigger">
        <div className="flex flex-col items-center justify-center gap-1 laptop:sticky laptop:flex-1 laptop:top-16 laptop:max-h-[calc(100vh-4rem)] z-10">
          <h2
            className='text-lg font-bold text-center desktop:text-xl hd:text-3xl'>WHO ARE WE?</h2>
          <p className='text-sm text-center desktop:text-base hd:text-md'>Discover who we are and be part of our <span className='font-bold text-accent-500'>JOURNEY</span></p>
        </div>

        <div className="flex flex-col flex-1 gap-16">
          <StickyScrollItem>
            <StickyScrollContent imageUrl="./images/australia-map.png">

              <h2 className='text-xl font-bold desktop:text-2xl hd:text-3xl'>DMRS <span className='text-primary-300'>Australia</span></h2>
              <p className='text-xs text-justify desktop:text-sm hd:text-md'>Dan Murdoch Risk Services (Australia) Pty Ltd is the parent company of our operational division Dan Murdoch Risk Services (Thailand) Limited.</p>

              <Button size="xs" variant='default' className=" w-fit !bg-accent-400 !ring-accent-400 text-white">
                <Link to="/dmrs-fe/australia">
                  Go to DMRS Australia
                </Link>
              </Button>

            </StickyScrollContent>

          </StickyScrollItem>

          <StickyScrollItem>
            <StickyScrollContent imageUrl="./images/thailand-map.png">

              <h2 className='text-xl font-bold desktop:text-2xl hd:text-3xl'>DMRS <span className='text-primary-300'>Thailand</span></h2>
              <p className='text-xs text-justify desktop:text-sm hd:text-md'>Dan Murdoch Risk Services (Thailand) Co. Ltd. staff are trained detectives and intelligence analysts who use both objective and subjective thinking to gather manual online data leading to intelligence for many Fortune 500 companies worldwide.</p>

              <Button size="xs" variant='default' className=" w-fit !bg-accent-400 !ring-accent-400 text-white">
                <Link to="/dmrs-fe/thailand">
                  Go to DMRS Thailand
                </Link>
              </Button>

            </StickyScrollContent>
          </StickyScrollItem>

          <StickyScrollItem>
            <StickyScrollContent>

              <h2 className='text-xl font-bold desktop:text-2xl hd:text-3xl'>Specialization</h2>
              <p className='text-xs text-justify desktop:text-sm hd:text-md'>We specialize in pharmaceuticals and the protection of and identifying risks associated with medicines worldwide.</p>

              <Button size="xs" variant='default' className="w-fit">
                <Link to="/dmrs-fe/contact">
                  Get Started
                </Link>
              </Button>

            </StickyScrollContent>
          </StickyScrollItem>


        </div>
      </section>

      {/* VISION AND MISSION SECTION */}
      <section className="relative flex p-10 pb-10 z-[1] gap-5">

        <div className="absolute top-[-170%] right-[-40%] scale-50 hidden laptop:flex">
          {/* <Rocket/> */}
        </div>

        <VerticalProgress>
          <VerticalProgressPoint className="top-0 bg-primary-300" />
          <VerticalProgressPoint className="top-[13.5rem] tablet:top-[10rem] laptop:top-[13.5rem] desktop:top-[10.5rem] hd:top-[14rem] bg-primary-300" />
        </VerticalProgress>

        <div className="flex flex-col laptop:max-w-[55%] gap-10">

          <div className="flex flex-col gap-3">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              className="flex items-center gap-3">

              <div className="flex items-center justify-center p-2 rounded-md bg-black/5 aspect-square">
                <FaEye className='text-sm laptop:text-md hd:text-lg' />
              </div>

              <h2 className="text-lg font-bold laptop:text-xl hd:text-2xl">Our <span className='text-primary-300'>Vision</span></h2>

            </motion.div>

            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
              className='text-xs text-justify laptop:text-sm hd:text-base'>Dan Murdoch Risk Services will be the preferred company of choice for online intelligence, investigative consultancy, brand protection and business intelligence advice worldwide offering beneficial solutions for all corporate and personal problems.</motion.p>
          </div>

          <div className="flex flex-col gap-3">

            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={1}
              className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 rounded-md bg-black/5 aspect-square">
                <FaRocket className='text-sm laptop:text-md hd:text-lg' />
              </div>
              <h2 className="text-lg font-bold laptop:text-xl hd:text-2xl">Our <span className='text-primary-300'>Mission Statement</span></h2>
            </motion.div>

            <motion.p
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={2}
              className='text-xs text-justify laptop:text-sm hd:text-base'>Dan Murdoch Risk Services will offer and deliver to the corporate world and the general public a complete range of business services from intelligence strategies and a true investigative consultancy to proactive solutions and risk management strategies for internal and external problems facing companies and individuals worldwide.</motion.p>
          </div>

        </div>


      </section>

      <section className='relative flex flex-col gap-10 p-10 py-10 mt-16 laptop:flex-row'>

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

          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-center hd:flex-row hd:gap-5">
            <img src="./images/sheild-dynamic-color.png" className='w-1/4' alt="" />
            <h2 className='text-lg font-bold text-center hd:text-2xl hd:text-left'> What are <span className="text-primary-300">we</span> offering?</h2>
          </motion.div>


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