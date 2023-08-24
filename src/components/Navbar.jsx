import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 480) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }

    const updateMedia = () => {
      if (window.innerWidth > 480) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, [])

  return (
    isMobile ? <MobileNavbar/> : <DefaultNavbar/>
  )
}

const DefaultNavbar = () => {
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

const MobileNavbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-6 text-sm text-white bg-[#1e1e1e]">
    </div>
  )
}

export default Navbar