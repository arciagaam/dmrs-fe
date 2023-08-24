import React, { useEffect, useRef, useState } from 'react'

const TextMarquee = () => {

    const base = 2.45; // font size in rem
    const content = ['Intelligent Intelligence', 'Meaningful Investigations', 'Thoughtful Research'];
    const [counter, setCounter] = useState(content.length-1)
    const sliderRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {

            if (counter == 0) {
                setCounter(content.length-1)
            } else {
                setCounter(prev => prev-1)
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [counter])

    return (
        <div className={`flex flex-col overflow-hidden transition-all max-h-[2.45rem]`}>
            <div ref={sliderRef} className={`flex transition-all duration-1000 ease-in-out flex-col-reverse items-center z-10 translate-y-[-${counter*base}rem]`}>
                {content.map((item, index) => <p className='text-md' key={index}>{item}</p>)}
            </div>
        </div>
    )
}

export default TextMarquee