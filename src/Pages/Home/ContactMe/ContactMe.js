import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ContactMe.css'

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x9fgn77', 'template_ga63637', e.target, 'user_D6NRRRQqBmKlFFSRdDwrA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="container" id="contact">


            <h1 class='text-white text-center p-4'>CONTACT ME</h1>
            <div className='contact_container row '>
                <div className='contact_content col-md-6'>
                    <h3 className='contact_title'>Talk to me</h3>

                    <div className='contact_info'>
                        <div data-aos="fade-up" className='contact_card'>
                            <i class='bx bx-mail-send contact_card-icon'></i>
                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">shahidmonowar.cse@gmail.com</span>

                            <a href="mailto: shahidmonowar.cse@gmail.com" target="_blank" className='contact_button'>
                                Write me <i class='bx bx-right-arrow-alt contact_button-icon' ></i></a>
                        </div>
                        <div data-aos="fade-up" className='contact_card'>
                            <i class='bx bxl-telegram contact_card-icon'></i>
                            <h3 className="contact_card-title">Telegram</h3>
                            <span className="contact_card-data">shahidmonowar</span>

                            <a href="https://t.me/shahidmonowar" target="_blank" className='contact_button'>
                                Write me <i class='bx bx-right-arrow-alt contact_button-icon' ></i></a>
                        </div>
                        <div data-aos="fade-up" className='contact_card'>
                            <i class='bx bxl-messenger contact_card-icon'></i>
                            <h3 className="contact_card-title">Messenger</h3>
                            <span className="contact_card-data">m.me/mdshahidmonowar</span>

                            <a href="https://m.me/mdshahidmonowar" target="_blank" className='contact_button'>
                                Write me <i class='bx bx-right-arrow-alt contact_button-icon' ></i></a>
                        </div>
                    </div>
                </div>

                <div className='contact_content col-md-6'>
                    <h3 className='contact_title mt-1'>Write me your project</h3>

                    <form action="" onSubmit={sendEmail} className='contact_form'>
                        <div className='contact_form-div'>
                            <label htmlFor="" className='contact_form-tag'>Names</label>
                            <input type="text" name="name" placeholder='Enter your name' className='contact_form-input' />
                        </div>

                        <div className='contact_form-div'>
                            <label htmlFor="" className='contact_form-tag'>Email</label>
                            <input type="email" name="email" placeholder='Enter your email' className='contact_form-input' />
                        </div>
                        <div className='contact_form-div contact_form-area'>
                            <label htmlFor="" className='contact_form-tag'>Project</label>
                            <textarea name="message" className='contact_form-input' placeholder='Write your project' id="" cols="30" rows="10"></textarea>
                        </div>

                        <button type="submit" className="btn primary-btn" value="Send Message">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;