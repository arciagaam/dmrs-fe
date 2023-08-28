import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { NavLink } from 'react-router-dom';
import NavAccordion from './NavAccordion';
const Navbar = () => {
  const navRef = useRef(null);
  const ctaRef = useRef(null);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      setisTablet(false)
    } else {
      setisTablet(true)
    }

    const updateMedia = () => {
      if (window.innerWidth > 640) {
        setisTablet(false);
      } else {
        setisTablet(true);
      }
    };

    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, [])

  useEffect(() => {

    const updateNavColor = () => {
      const navTrigger = document.querySelector('.navTrigger');
      const nav = navRef.current;
      const cta = ctaRef.current;

      if(!nav && !cta) {
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const navTriggerRect = navTrigger.getBoundingClientRect();

      if (navRect.bottom >= Math.floor(navTriggerRect.top)) {
        nav.classList.add('bg-background-dark');  

        if(!cta) return;
        cta.classList.add('max-w-[50rem]');
      } else {
        nav.classList.remove('bg-background-dark');

        if(!cta) return;
        cta.classList.remove('max-w-[50rem]');
      }
    }

    window.addEventListener('scroll', () => {
      updateNavColor();
    })

    updateNavColor();

  }, [])

  return (
    isTablet ? <MobileNavbar nav={navRef} /> : <DefaultNavbar nav={navRef} cta={ctaRef} />
  )
}

const DefaultNavbar = ({ nav, cta }) => {
  return (
    <div ref={nav} className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-6 text-sm text-white">
      <p>LOGO</p>

      <div className="flex items-center gap-8">
        <NavLink className={({isActive}) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="/">
          Home
        </NavLink>
        
        <NavLink className={({isActive}) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="dmrs/australia">
          DMRS Australia
        </NavLink>

        <NavLink className={({isActive}) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="dmrs/thailand">
          DMRS Thailand
        </NavLink>

        <NavLink className={({isActive}) => isActive ? 'text-primary-300' : 'text-white transition-all hover:text-primary-300 active:brightness-90'} to="dmrs/vpn">
          DMRS VPN
        </NavLink>

        <NavLink ref={cta} className='overflow-hidden transition-all duration-1000 max-w-0 whitespace-nowrap'>
          <Button size='xs' className="m-1">Get Started</Button>
        </NavLink>
      </div>
    </div>
  )
}

const MobileNavbar = ({ nav }) => {
  return (
    <div ref={nav} className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-6 text-sm text-white bg-background-dark">
      <p>LOGO</p>

      <button className='text-lg'>=</button>
    </div>
  )
}

export default Navbar