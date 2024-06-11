import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShopify, faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Prices = () => {
    return (
        <section className='content-container prices-section my-5'>
            <div>
                <div className='prices-text text-center'>
                    <p className="unlock-text mb-2" style={{ display: 'inline-block' }}>Our Pricing</p>
                    <h2 className='fs-1 fw-medium my-4 line-height-medium'>Marketer Mitu Provides The Best Price Just For You</h2>
                    <p className='lead mb-5 section-subtitle'>Experience top-tier services with Marketer Mitu, delivering unmatched solutions tailored just for you. Elevate your success with expert assistance.</p>
                </div>
                <div className='prices-container row row-cols-1 row-cols-lg-3'>
                    <div className='col'>
                        <div className='single-price'>
                            <div className='single-price-info'>
                                <span className='price-brand-icon'><FontAwesomeIcon icon={faShopify} /></span>
                                <h5>Shopify Marketing</h5>
                                <p>I will do complete Shopify Marketing to boost Shopify Sales, Website Promotion</p>
                                <span className='price'>$150</span>
                            </div>
                            <div className='price-features-container'>
                                <ul className='price-features'>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Facebook & Google Ads</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Shopify Sales Funnel</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Winning Products Research</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Shopify Store Design</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>On Page - Off Page SEO</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Quality Backlinks</span></li>
                                </ul>
                            </div>
                            <div className='text-center mt-4'>
                                <a href="#" className='order-now-btn'>Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='single-price single-price-active' data-aos="zoom-in-down">
                            <div className='single-price-info'>
                                <span className='price-brand-icon'><FontAwesomeIcon icon={faGoogle} /></span>
                                <h5>Google Marketing</h5>
                                <p>I will be Google Ads Adwords ppc Advertising Marketing Campaign Specialist</p>
                                <span className='price'>$200</span>
                            </div>
                            <div className='price-features-container'>
                                <ul className='price-features'>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Google Search Ads</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>keywords Research</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Complete Campaign Setup</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Targeted Customer</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Google Marchent Setup</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Shopping Ads</span></li>
                                </ul>
                            </div>
                            <div className='text-center mt-4'>
                                <a href="#" className='order-now-btn'>Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='single-price'>
                            <div className='single-price-info'>
                                <span className='price-brand-icon'><FontAwesomeIcon icon={faFacebook} /></span>
                                <h5>Facebook Sales Funnel</h5>
                                <p>I will create a Facebook ad sales funnel for a few months</p>
                                <span className='price'>$250</span>
                            </div>
                            <div className='price-features-container'>
                                <ul className='price-features'>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Facebook Ads Setup</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Pixel setup with GTM</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Tageted Customar Research</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Google Analytics4 Setup</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Higher Conversion</span></li>
                                    <li><FontAwesomeIcon icon={faCheck} /><span>Low Cost & Best ROI</span></li>
                                </ul>
                            </div>
                            <div className='text-center mt-4'>
                                <a href="#" className='order-now-btn'>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Prices;