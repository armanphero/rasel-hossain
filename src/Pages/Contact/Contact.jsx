import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const [state, ChangeState] = useState(false);
    const notify = () => toast("successfully sent!");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vz3s2sn', 'template_qmc9uwq', form.current, '9gSfZZ2Cnw0WAd75X')
            .then((result) => {
                notify();
                console.log(result.text);
                ChangeState(!state);
            }, (error) => {
                console.log(error.text);
            });
    };
    useEffect(() => {
        document.getElementById('user-name').value = '';
        document.getElementById('user-email').value = '';
        document.getElementById('user-message').value = '';
    }, [state])

    return (
        <section className='content-container contact-section' id='contact-section'>
            <div className='row row-cols-1 row-cols-xl-2 g-4'>
                <div className='col'>
                    <div className='contact-info' data-aos="zoom-in">
                        <div className='contact-info-text'>
                            <p className="unlock-text mb-2" style={{ display: 'inline-block' }}>CONTACT US</p>
                            <h2 className='fs-1 fw-medium my-4 line-height-medium'>Get In Touch With Marketer Rasel</h2>
                            <p className='lead mb-5'>Connect with Marketer Rasel. Reach Out Today for Expert Guidance in Elevating Your Business. Contact Us to Unleash the Power of Strategic Marketing Strategies.</p>
                            <div className='social-contact row row-cols-1 row-cols-md-2 g-4'>
                                <div className='single-social-contact'>
                                    <a href="https://api.whatsapp.com/send?phone=01609781896" target='_blank' className='whatsapp-contact contact-icon'><FontAwesomeIcon icon={faWhatsapp} /></a>
                                    <div className='contact-link'>
                                        <h5>WhatsApp</h5>
                                        <a href="https://api.whatsapp.com/send?phone=01609781896" target='_blank'>01609781896</a>
                                    </div>
                                </div>
                                <div className='single-social-contact'>
                                    <a href="https://www.linkedin.com/in/jannatul-ferdous-337019267/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR2kWiTISqm62vcQOOgLKAr4_B4C9JSYeyjxkmc-_dmOu1kpn0z5g8RB1no" target='_blank' className='linkdin-contact contact-icon'><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <div className='contact-link'>
                                        <h5>Linkedin</h5>
                                        <a href="https://www.linkedin.com/in/adsexpert-rasel/" target='_blank'>linkedin.com/in/md-rasel-hossain
</a>
                                    </div>
                                </div>
                                <div className='single-social-contact'>
                                    <a href="https://www.facebook.com/profile.php?id=61550255662761" target='_blank' className='facebook-contact contact-icon'><FontAwesomeIcon icon={faFacebook} /></a>
                                    <div className='contact-link'>
                                        <h5>Facebook</h5>
                                        <a href="https://www.facebook.com/adsexpert.proo/" target='_blank'>facebook.com/𝐀𝐝𝐬-𝐄𝐱𝐩𝐞𝐫𝐭(Rasel)</a>
                                    </div>
                                </div>
                                <div className='single-social-contact'>
                                    <a href="mailto:jannatRasel@gmail.com" className='email-contact contact-icon'><FontAwesomeIcon icon={faEnvelope} /></a>
                                    <div className='contact-link'>
                                        <h5>Email</h5>
                                        <a href="mailto:jannatRasel@gmail.com">raselHossain@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='contact-form' data-aos="zoom-in">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="from_name"  required placeholder='Your Name' id='user-name' />
                            <input type='email' name="from_email" required placeholder='Your Email' id='user-email' />
                            <textarea name="message" cols="30" rows="5" required placeholder='Your Message' id='user-message'></textarea>
                            <input type="submit" value="Send" className='contact-form-submit' id='sendEmail' />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;