import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-6 text-sm text-white bg-[#1e1e1e]">
        <p>LOGO</p>

        <ul className="flex items-center gap-8">
            <li>Home</li>
            <li>DMRS Australia</li>
            <li>DMRS Thailand</li>
            <li>DMRS VPN</li>
            <li>CTA BUTTON</li>
        </ul>
    </div>
  )
}

export default Navbar