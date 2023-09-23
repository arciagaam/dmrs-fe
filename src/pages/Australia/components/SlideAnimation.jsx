import React from 'react'
import { motion } from "framer-motion";

const SlideAnimation = ({children, ...props}) => {

    const {imageUrl, title, titleSpan, spanColor, description, linkTitle, linkTo} = props;
    
    return (
        <>
            <div className="max-h-[350px] flex w-full tablet:z-10 tablet:w-full tablet:max-h-[500px]">
                {imageUrl && <motion.img
                    initial={{ opacity: 0, x: 105 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, margin: "-240px" }}
                
                    src={imageUrl} alt="" className='object-cover cover rounded-tl-[3.12rem] rounded-br-[3.12rem]'/>}
                    
                <motion.div
                    initial={{ opacity: 0, x: -75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true, margin: "-240px" }}

                    className="z-10 flex flex-col justify-center h-full gap-5">
                        
                    {children}
                </motion.div>
            </div>
        </>
    )
    
}

export default SlideAnimation