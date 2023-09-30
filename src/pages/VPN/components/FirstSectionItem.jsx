import React from 'react'
import { motion } from 'framer-motion';

const FirstSectionItem = ({ ...props }) => {
    const { imageUrl, title, content, index } = props;
    return (
        <div className="relative flex flex-col gap-5 laptop:flex-row">

            <div className="relative overflow-hidden rounded-lg laptop:hidden">
                <div className="z-20">
                    <img className='object-cover w-full h-full aspect-square' src={imageUrl} alt="" />
                </div>

                <div className="absolute inset-0 bg-black/70"></div>

                <h3 className='absolute top-0 left-0 z-30 m-10 text-lg text-white'>{title}</h3>
            </div>


            <div className="flex flex-col laptop:w-[60%] laptop:gap-5">
                <motion.h3
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    className='hidden text-lg text-background-dark laptop:block'>{title}</motion.h3>

                <motion.p
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    className='w-full text-justify'>{content}</motion.p>
            </div>

            <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="z-20 hidden w-1/2 h-full overflow-hidden rounded-lg laptop:block laptop:absolute right-[-15%] top-0 shadow-md">
                <img className='object-cover w-full h-full aspect-video' src={imageUrl} alt="" />
            </motion.div>
        </div>
    )
}

export default FirstSectionItem