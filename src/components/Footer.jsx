import React from 'react'

const Footer = () => {
    return (
        <div className="flex text-white min-h-[calc(100vh-4rem)] bg-[#1e1e1e] p-10 gap-10 z-50">
            <div className="flex flex-col flex-1 gap-8">
                <h2 className='text-6xl'>LOGO</h2>

                <div className="flex flex-col gap-2">
                    <p className='text-sm text-green-400'>Navigation</p>
                    <p>DMRS Home</p>
                    <p>DMRS Thailand</p>
                    <p>DMRS Australia</p>
                    <p>DMRS VPN</p>
                </div>

                <div className="flex justify-between mt-auto text-xs">
                    <div className="flex gap-3">
                        <p>Privacy Policy</p>
                        <p>|</p>
                        <p>Terms & Conditions</p>
                    </div>

                    <p>c 2021 Yourintell.com</p>
                </div>
            </div>

            <div className="min-w-[1px] w-[1px] bg-white min-h-full"></div>

            <div className="flex flex-col flex-1">
                <h2 className='text-2xl text-purple-400'>CONTACT US</h2>
                <p>Ayusin components pa para sa input</p>
            </div>
        </div>
    )
}

export default Footer