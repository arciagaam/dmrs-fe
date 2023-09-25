import React from 'react'

const FirstSectionItem = ({...props}) => {
    const {imageUrl, title, content, index} = props;
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
                <h3 className='hidden text-lg text-background-dark laptop:block'>{title}</h3>
                <p className='w-full text-justify'>{content}</p>
            </div>
            
            <div className="z-20 hidden w-1/2 h-full overflow-hidden rounded-lg laptop:block laptop:absolute right-[-15%] top-0 shadow-md">
                <img className='object-cover w-full h-full aspect-video' src={imageUrl} alt="" />
            </div>
        </div>
    )
}

export default FirstSectionItem