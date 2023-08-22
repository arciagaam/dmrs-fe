import React from 'react'
import Hero from '../../components/Hero'
import StickyScrollItem from './components/StickyScrollItem'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero>
        <div className="flex items-center justify-center w-full text-white">
          HERO SECTION
        </div>
      </Hero>

      {/* WHO ARE WE SECTION */}
      <div className="flex bg-red-500">
        <div className="flex flex-1 sticky top-0 items-center justify-center max-h-[calc(100vh-4rem)]">
          <h2>WHO ARE WE?</h2>
        </div>

        <div className="flex-1 bg-pink-300">

          <StickyScrollItem>
            <div className="flex flex-col justify-center h-full gap-5">
              <h2>DMRS Australia</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit corrupti dolorem magni aut maxime aspernatur sequi totam dolorum accusantium!</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="flex flex-col justify-center h-full gap-5">
              <h2>DMRS Thailand</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit corrupti dolorem magni aut maxime aspernatur sequi totam dolorum accusantium!</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

          <StickyScrollItem>
            <div className="flex flex-col justify-center h-full gap-5">
              <h2>Specialization</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit corrupti dolorem magni aut maxime aspernatur sequi totam dolorum accusantium!</p>
              <button className='w-fit'>Link Button</button>
            </div>
          </StickyScrollItem>

        </div>
      </div>

      {/* VISION AND MISSION SECTION */}

      <div className="flex bg-blue-500/20 min-h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-center w-1/2">
          <div className="flex flex-col">
            <p className='font-bold text-9xl'>VISION</p>
            <p className='font-bold text-9xl'>AND</p>
            <p className='font-bold text-9xl'>MISION</p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-1/2 gap-10 p-20">

          <div className="grid auto-cols-[minmax(calc(100%),_auto)] grid-flow-col overflow-x-auto">
            <div className="flex flex-col gap-3">
              <h2 className='text-5xl'>VISION</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae dolorem porro aspernatur animi illum iusto possimus dignissimos, excepturi eaque!</p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className='text-5xl'>MISSION</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quos excepturi maxime odit ducimus a molestias dolores aliquam, commodi debitis!</p>
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