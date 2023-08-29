import React, { useState } from 'react'
import WhatWeDoItem from './WhatWeDoItem'

const WhatWeDo = () => {
    const contents = [
        {
            name: 'Cyber Monitoring',
            content: 'Cyber product monitoring by trained intelligence analysts'
        },
        {
            name: 'Global Investigations',
            content: 'Worldwide Intellectual Property investigations'
        },
        {
            name: 'Undercover Operations',
            content: 'Undercover operations worldwide'
        },
        {
            name: 'BI Background',
            content: 'Business Intelligence background checks'
        },
        {
            name: 'Research',
            content: 'Thoughtful Online Research'
        },
        {
            name: 'Risk Assessment',
            content: 'Risk Management assessments'
        },
        {
            name: 'Anonymous Hosting',
            content: 'Anonymous domain name registration and hosting services'
        },
        {
            name: 'VPN Access',
            content: 'Anonymous VPN internet access for our clients and the industry'
        },
        {
            name: 'Security Assessments',
            content: 'Enhancing protective measures systematically.'
        },
    ]
    
    const [hovering, setHovering] = useState(false);
    const [activeContent, setActiveContent] = useState(contents[0]);

    const handleSelectActive = (content) => {
        if (content.name === activeContent.name) return;
        
        const index = contents.findIndex((_content) => _content.name == content.name);
        setActiveContent(contents[index]);
    }
    return (
        <div className="flex justify-between py-20">

            <div className="flex flex-col items-center justify-center flex-1 p-3">
                <div className="flex flex-col items-start">
                    <h2 className='text-xl font-bold uppercase'>{activeContent.name}</h2>
                    <p>{activeContent.content}</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center self-center flex-1 w-fit" onMouseOver={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                <div className="grid grid-cols-3 gap-1 w-fit">
                    {
                        contents.map((content, index) => <WhatWeDoItem key={index} content={content} parentHover={hovering} active={content.name == activeContent?.name} handleSelectActive={handleSelectActive}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo