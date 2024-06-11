import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    
    return (
        <section className='about-section' id='AboutMe'>
            <div className='content-container row row-cols-1 row-cols-xl-2 g-4 align-items-center'>
                <div className='col'>
                    <div className='about-img-container' data-aos="fade-up">
                        <img src="./img/female-on-desk.jpg" alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='about-description' data-aos="fade-up">
                        <p className="unlock-text inline-block">About Marketer Rasel Socialzy</p>
                        <h2 className='fs-1 fw-medium my-4 line-height-medium'>3+ Years Of Experiences In Social Media Marekting</h2>
                        {/* <h2></h2> */}
                        <p className='lead mb-5'>Tap into Marketer Rasel's wealth of knowledge gained from 3+ years in social media marketing. Transform your business with effective strategies that drive engagement and growth.</p>
                        <div className='seo-div d-flex gap-4'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <div>
                                <h5 className='mb-2'>Search Engine Optimization (SEO)</h5>
                                <p>Enhance Visibility with Marketer Rasel's Search Engine Optimization Marketing Service</p>
                            </div>
                        </div>
                        <div className='google-marketing-div'>
                            <FontAwesomeIcon icon={faGoogle} />
                            <div>
                                <h5 className='mb-2'>Google Marketing</h5>
                                <p>Achieve Success with Marketer Rasel's Google Ads Marketing Service.</p>
                            </div>
                        </div>
                        <div className='social-media-marketing-div d-flex gap-4 mt-5'>
                            <FontAwesomeIcon icon={faUsersLine} />
                            <div>
                                <h5 className='mb-2'>Social Media Marketing</h5>
                                <p>Strategic Impact Marketer Rasel's Proven Google Social Media Marketing Service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;