import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHandHoldingDollar, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const ChooseMe = () => {
    return (
        <div className='choose-me content-container'>
            <div className='choose-container row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-white'>
                <div className='choose-element p-5 m-0 col'>
                    <h2 className='mb-2'>Why Choose Marketer Mitu?</h2>
                    <ul className='m-0' style={{listStyle: 'inside'}}>
                        <li>3+ years of experience</li>
                        <li>24/7 hours Active</li>
                        <li>On-time Deliver</li>
                        <li>Unlimited revision</li>
                    </ul>
                </div>
                <div className='choose-element p-5 m-0 col'>
                    <FontAwesomeIcon icon={faClock} />
                    <h2 className='my-2'>Save Your Time</h2>
                    <ul className='m-0'>
                        <li>Experience the Time Saving</li>
                        <li>Benefits of Social Media</li>
                        <li>Marketing Try Now!</li>
                    </ul>
                </div>
                <div className='choose-element choose-element-active p-5 m-0 col' data-aos="zoom-in">
                    <FontAwesomeIcon icon={faHandHoldingDollar} className='text-white' />
                    <h2 className='my-2'>Affordable Price For You</h2>
                    <ul className='m-0'>
                        <li>Your budget-friendly</li>
                        <li>solution is high-quality</li>
                        <li>at an affordable price</li>
                    </ul>
                </div>
                <div className='choose-element p-5 m-0 col'>
                    <FontAwesomeIcon icon={faLightbulb} />
                    <h2 className='my-2'>Marketer Mitu's Strategy</h2>
                    <ul className='m-0'>
                        <li>Maximize Your Marketing</li>
                        <li>Impact Learn from Marketer</li>
                        <li>Mitu's Strategies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChooseMe;