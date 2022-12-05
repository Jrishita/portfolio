import React, { useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done,] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xuxcyiz', 'template_mrl1wv6', form.current, 'hFrv7mwfJOY0mcH5-')
            .then((result) => {
                console.log(result.text);
                // setDone = (true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-form' id='Contact'>
            <div className='w-left'>
                <div className='awsom'>
                    <span>Get in touch</span>
                    <span>contact me</span>
                    <div className='blur s-blur1' style={{ background: "#abf1ff94" }}></div>
                </div>

            </div>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text ' name='user_name' className='user' placeholder='Name' />
                    <input type='email' name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user ' placeholder='Message' />
                    <input type="submit" value='send' className='button' />
                    <span>{done && "Thanks for Contacting me!"}</span>
                    <div className='blur c-blur1'
                        style={{ background: "var(--purple)" }}></div>
                </form>
            </div>

        </div >
    )
}

export default Contact