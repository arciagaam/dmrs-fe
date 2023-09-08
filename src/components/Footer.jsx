import React, { useState } from 'react'
import FormInput from './Form/FormInput';
import Button from './Button';
import { NavLink, useLocation } from 'react-router-dom';
const Footer = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const path = location.pathname;
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
    }

        console.log(path);

    const handleOnInput = (e) => {
        const inputName = e.target.name;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [inputName]: e.target.value
        }));
    }

    return (
        <div className="flex text-white min-h-[calc(100vh-4rem)] bg-background-dark p-10 gap-10 z-50 overflow-hidden tablet:flex-col-reverse">
            <div className="flex flex-col flex-1 gap-8">

                <div className="flex items-center justify-center gap-3">
                    <img src="./images/logo-1.png" className='w-1/4' alt="" />
                    <div className="flex gap-2 text-lg">
                        <h2>Dan</h2>
                        <h2>Murdoch</h2>
                        <h2>Risk</h2>
                        <h2>Services</h2>
                    </div>
                </div>

                <div className="flex flex-col h-full gap-2">
                    <p className='text-sm text-accent-400'>Navigation</p>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-base hover:bg-white/20 w-full hover:px-3'} to="/dmrs-fe/">
                        Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-base hover:bg-white/20 w-full hover:px-3'} to="dmrs/thailand">
                        DMRS Thailand
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-base hover:bg-white/20 w-full hover:px-3'} to="dmrs/australia">
                        DMRS Australia
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-primary-300 text-base' : 'text-white transition-all duration-500 hover:text-primary-300 active:brightness-90 text-base hover:bg-white/20 w-full hover:px-3'} to="dmrs/vpn">
                        DMRS VPN
                    </NavLink>
                </div>

                <div className="flex justify-between mt-auto text-xs whitespace-nowrap tablet:flex-col tablet:gap-5">
                    <div className="flex gap-3">
                        <p>Privacy Policy</p>
                        <p>|</p>
                        <p>Terms & Conditions</p>
                    </div>

                    <p>c 2021 Yourintell.com</p>
                </div>
            </div>

            {
                path != "/dmrs-fe/contact"
                ? <>
                    <div className="min-w-[1px] w-[1px] bg-white min-h-full"></div>

                    <div className="flex flex-col flex-1 gap-5">
                        <h2 className='text-2xl text-accent-500'>CONTACT US</h2>

                        <form action="#" className='flex flex-col gap-8' onSubmit={handleFormSubmit}>
                            <FormInput label='Name' name='name' placeholder='Enter your name' onInput={handleOnInput} value={formData.name} />
                            <FormInput label='Email Address' name='email' placeholder='Enter your email address' onInput={handleOnInput} value={formData.email} />
                            <FormInput label='Message' name='message' placeholder='Leave us a message!' onInput={handleOnInput} value={formData.message} />
                            <Button size="sm" variant="outline"><a href="mailto:test@gmail.com">Send us a message!</a></Button>

                        </form>
                    </div>
                </>
                : <></>
            }
        </div>
    )
}

export default Footer