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
        <div className="z-10 flex w-full">

            {
                index == 0 ? <Vision /> : <Mission />
            }

            <div className="flex flex-col flex-1 px-10">
                <div className="relative flex text-md">

                    <div className={`absolute bg-primary-300 left-0 top-0 h-full transition-transform duration-500`} style={{ minWidth: `${titleWidth}px`, transform: `translateX(${titleWidth * index + 1}px)` }}></div>

                    <div onClick={() => setIndex(0)} ref={titleRef} className={`z-10 flex items-center flex-1 gap-2 px-5 py-2 cursor-pointer transition-[color filter] delay-100 duration-500 ${index == 0 ? 'text-white' : 'text-background-dark/70 grayscale'}`}>
                        <FaEye />
                        <p>Vision</p>
                    </div>

                    <div className="min-w-[.5px] border border-background-dark/10 z-10"></div>

                    <div onClick={() => setIndex(1)} className={`z-10 flex items-center flex-1 gap-2 px-5 py-2 cursor-pointer transition-[color filter] delay-100 duration-500 ${index == 1 ? 'text-white' : 'text-background-dark/70 grayscale'}`}>
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
    const { title, body } = content;
    const { className } = props;

    return (
        <div className={`flex flex-col py-10 gap-3 ${className}`}>
            {/* <h2 className='text-xl font-medium text-primary-300'>{title}</h2> */}
            <p className='text-base text-justify'>{body}</p>
        </div>
    )
}

const Mission = () => {
    return (
        <div className="relative flex items-center justify-center flex-1">
            <div className="absolute top-0 left-0 translate-x-[-9%] translate-y-[-35%] opacity-40">
                <MissionRocket />
            </div>
            <div className="flex gap-3 text-lg font-bold text-background-dark">
                <FaFlag className='flex-1 w-full h-16' />
                <div className="flex flex-col">
                    <h2>Our <span className='text-primary-300'>Mission</span></h2>
                    <h2 className='text-primary-300'>Statement</h2>
                </div>
            </div>
        </div>
    )
}

const Vision = () => {
    return (
        <div className="relative flex items-center justify-center flex-1">
            <div className="absolute top-0 left-0 translate-x-[-9%] translate-y-[-35%] opacity-40">
                <MissionRocket />
            </div>
            <div className="flex items-center gap-3 text-lg font-bold text-background-dark">
                <FaEye className='flex-1 w-full h-12' />
                <h2>Our <span className='text-primary-300'>Vision</span></h2>
            </div>
        </div>
    )
}

export default VisionMission