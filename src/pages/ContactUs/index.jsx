import React, { useState } from 'react'
import FormInput from '../../components/Form/FormInput'
import Button from '../../components/Button'

const ContactUs = () => {

    const handleOnInput = (e) => {
        const inputName = e.target.name;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [inputName]: e.target.value
        }));
    } 
    
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <div className="flex flex-col navTrigger">
            <div className="flex min-h-[90vh] pt-20 bg-white">
                
                <div className="flex flex-col items-center justify-center flex-1 px-20">
                    <h2 className='self-start text-2xl font-bold uppercase'>Contact <span className='text-primary-300'>Us</span></h2>
                    <p className='text-sm'>If you would like to get in touch with us via email, you can use the contact form. Simply fill in your details and your message, and we'll respond as soon as possible.</p>
                </div>
                
                <form className="flex flex-col self-center flex-1 gap-3 px-20">
                    <FormInput className='ring-background-dark' label='Name' name='name' placeholder='Enter your name' onInput={handleOnInput} value={formData.name} />
                    <FormInput className='ring-background-dark' label='Email Address' name='email' placeholder='Enter your email address' onInput={handleOnInput} value={formData.email} />
                    <FormInput className='ring-background-dark' label='Message' name='message' placeholder='Leave us a message!' onInput={handleOnInput} value={formData.message} />
                    <Button size="sm" variant="outline"><a href="mailto:test@gmail.com">Send us a message!</a></Button>
                </form>
                
            </div>

            <div className="relative flex items-center justify-center w-full">
                <h2 className='absolute text-lg bg-transparent'>Our Locations</h2>
                <p className='absolute bottom-10 left-10 w-[35%] bg-transparent'>Other locations by our verified trusted partners in the global three regions the Americas, EMEA and Asia.</p>

                <img src="./images/contact-us-map.png" alt="" className='w-full'/>
            </div>
        </div>
    )
}

export default ContactUs