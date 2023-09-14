import React, { useEffect, useRef, useState, useTransition } from 'react'

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
import { MissionRocket } from './../../../components/Svgs'
import { FaEye, FaFlag } from 'react-icons/fa'

gsap.registerPlugin(MotionPathPlugin);

const VisionMission = () => {
    const titleRef = useRef(null);
    const [titleWidth, setTitleWidth] = useState(titleRef.current?.offsetWidth);

    useEffect(() => {
        gsap.to("#test", { duration: 10, motionPath: "#c3" })
    }, [])

    useEffect(() => {
        setTitleWidth(titleRef.current?.offsetWidth);

        const updateTitleWidth = () => {
            setTitleWidth(titleRef.current?.offsetWidth);
        }


        window.addEventListener('resize', updateTitleWidth);
        return () => window.removeEventListener('resize', updateTitleWidth);
    }, [titleRef]);

    const [index, setIndex] = useState(0);

    const CONTENT = [
        {
            icon: '/star-dynamic-color.png',
            title: 'Our Vision',
            body: 'Dan Murdoch Risk Services will be the preferred company of choice for online intelligence, investigative consultancy, brand protection and business intelligence advice worldwide offering beneficial solutions for all corporate and personal problems.'
        },

        {
            icon: '/target-dynamic-color.png',
            title: 'Our Mission Statement',
            body: 'Dan Murdoch Risk Services will offer and deliver to the corporate world and the general public a complete range of business services from intelligence strategies and a true investigative consultancy to proactive solutions and risk management strategies for internal and external problems facing companies and individuals worldwide.'
        }
    ]

    return (
        <div className="z-10 grid self-start w-full grid-cols-1 gap-10 laptop:grid-cols-2">

            {
                index == 0 ? <Vision /> : <Mission />
            }

            <div className="flex flex-col flex-1">
                <div className="relative grid grid-cols-2">

                    {/* highlight */}
                    <div className={`absolute bg-primary-300 left-0 top-0 h-full transition-transform duration-500`} style={{ minWidth: `${titleWidth}px`, transform: `translateX(${titleWidth * index + 1}px)` }}></div>

                    <div onClick={() => setIndex(0)} ref={titleRef} className={`z-10 tablet:text-base hd:text-lg flex items-center justify-center flex-1 gap-2 px-5 py-2 hd:py-6 cursor-pointer transition-[color filter] delay-100 duration-500 ${index == 0 ? 'text-white' : 'text-background-dark/70 grayscale'}`}>
                        <FaEye />
                        <p>Vision</p>
                    </div>

                    <div onClick={() => setIndex(1)} className={`z-10 tablet:text-base hd:text-lg flex items-center justify-center flex-1 gap-2 px-5 py-2 hd:py-6 cursor-pointer transition-[color filter] delay-100 duration-500 ${index == 1 ? 'text-white' : 'text-background-dark/70 grayscale'}`}>
                        <FaFlag />
                        <p>Mission</p>
                    </div>

                </div>

                <Content content={CONTENT[index]} className={'animate-appear-from-left'} />

            </div>
        </div>
    )
}

const Content = ({ content, ...props }) => {
    const { body } = content;
    const { className } = props;

    return (
        <div className={`flex flex-col py-10 gap-3 ${className} tablet:px-5 tablet:self-center desktop:w-full`}>
            <p className='text-xs text-justify tablet:text-sm hd:text-md'>{body}</p>
        </div>
    )
}

const Mission = () => {
    return (
        <div className="relative flex items-center justify-center flex-1">
            <div className="absolute top-0 left-0 translate-x-[-9%] translate-y-[-35%] opacity-40 laptop:translate-y-[-35%] laptop:translate-x-[-20%] hd:translate-y-[-34%] hd:translate-x-[-1%] z-0">
                <MissionRocket />
            </div>
            
            <div className="z-10 flex flex-col items-center self-center justify-center gap-3 text-lg font-bold laptop:text-xl laptop:flex-row laptop:gap-5 hd:text-3xl text-background-dark">
                <FaFlag />
                <div className="flex flex-col">
                    <h2 className='text-center laptop:flex laptop:text-left laptop:flex-col'>Our <span className='text-primary-300'>Mission</span><span className='text-primary-300'>Statement</span></h2>
                    
                </div>
            </div>
        </div>
    )
}

const Vision = () => {
    return (
        <div className="relative flex items-center justify-center flex-1">
            <div className="absolute top-0 left-0 translate-x-[-9%] translate-y-[-35%] opacity-40 laptop:translate-y-[-35%] laptop:translate-x-[-20%] hd:translate-y-[-34%] hd:translate-x-[-1%] z-0">
                <MissionRocket />
            </div>
            
            <div className="flex flex-col items-center self-center gap-3 text-lg font-bold laptop:text-xl laptop:flex-row laptop:gap-5 hd:text-3xl text-background-dark">
                <FaEye  />
                <h2 className='text-center laptop:flex laptop:text-left laptop:flex-col'>Our <span className='text-primary-300'>Vision</span></h2>
            </div>
        </div>
    )
}

export default VisionMission