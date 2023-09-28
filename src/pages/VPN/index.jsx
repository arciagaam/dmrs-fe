import React from 'react'
import Hero from '../../components/Hero'
import ColoredGrid from '../../components/ColoredGrid'
import { motion } from 'framer-motion'
import FirstSectionItem from './components/FirstSectionItem'
import VerticalProgress from '../../components/VerticalProgress'
import VerticalProgressPoint from '../../components/VerticalProgressPoint'
import StaggeredLine from '../../components/StaggeredLine'

const _MainData = [
    {
        imageUrl: './images/server.jpeg',
        title: 'Why do we use our own virtual private network system?',
        content: 'There are many reasons someone would want to surf the internet anonymously. Many people think that internet privacy is only for those trying to hide something but that simply is not the case. Internet privacy is essential for normal people like you and professionals like us who value their identity and rights. As governments, search engines, and marketers use increasingly more aggressive methods for tracking what you do online; the need for internet privacy has increased. Government agencies continue to push the boundaries of what they collect and demand from internet service providers, search engines, and individual website owners.',
    },

    {
        imageUrl: './images/browse.jpeg',
        title: "How They're Tracking You",
        content: "Every time you go online you run the risk of identify theft. Even seemingly harmless tasks like checking email and the news open you up to vulnerabilities. Website owners and statistics tracking systems can pinpoint the sites you've visited last, your geographic location and details about your browser and operating system. Worse, spyware and malevolent data tracking systems called cookies can track even more information about your surfing habits. For example, most web browsers today can save passwords for the sites that you visit. While this feature is convenient for us, criminals can often find and use this information to access your email accounts, online banking, and credit card accounts",
    },

    {
        imageUrl: './images/hacker.jpeg',
        title: "Why They're Tracking You",
        content: "A large number of people are interested in your surfing habits; from marketing agencies to government agencies. Marketers want to know your buying habits in order to serve you more targeted offers. Governments may be interested in censoring the information you access. While not everyone tracking you may have evil intent, it is dangerous to leave your safety in the hands of others.",
    },

    {
        imageUrl: './images/security.jpeg',
        title: "How to Stop Them From Tracking You",
        content: "The best and perhaps only way for you to prevent this data collection is to surf the web anonymously. Anonymous surfing can be accomplished by using proxy servers that randomize your IP address as you surf the internet Proxy servers act as a middleman between you and the web sites you visit, preventing anyone from personally identifying you and your surfing habits. Protecting your internet privacy is essential for protecting you from those who wish to harm you. Using proxy servers is an effective way to do this.",
    },
]

const Vpn = () => {
    return (
        <div className="flex flex-col w-full bg-white">
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
                                    className='z-10 text-lg text-center tablet:text-xl laptop:text-2xl hd:text-3xl'>DMRS VPN</motion.h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Hero>

            <section className='relative flex gap-10 p-10 overflow-hidden navTrigger'>
                
                <VerticalProgress>
                    <VerticalProgressPoint className="top-0 bg-primary-300" />
                    <VerticalProgressPoint className="top-[51.5rem] tablet:top-[56.5rem] laptop:top-[30.5rem] bg-primary-300" />
                    <VerticalProgressPoint className="top-[105.5rem] tablet:top-[113.5rem] laptop:top-[57.5rem] bg-primary-300" />
                    <VerticalProgressPoint className="top-[150.5rem] tablet:top-[163.5rem] laptop:top-[75.5rem] bg-primary-300" />
                </VerticalProgress>

                <div className="flex flex-col gap-16">
                    {_MainData.map((item, index) => <FirstSectionItem key={index} imageUrl={item.imageUrl} title={item.title} content={item.content} index={index} />)}
                </div>

            </section>
        </div>


    )
}

export default Vpn