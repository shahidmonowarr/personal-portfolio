import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
            <form onSubmit={sendEmail}>
                <div className="row pt-2 mx-auto text-center">
                    <div data-aos="fade-up" className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div data-aos="fade-up" className="col-8 pt-2 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div data-aos="fade-up" className="col-8 pt-2 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <textarea className="form-control" name="message" id="" cols="30" rows="8" placeholder="Your message"></textarea>
                    </div>
                    <div className="col-8 pt-2 form-group mx-auto">
                        <input type="submit" className="primary-btn mb-3" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;