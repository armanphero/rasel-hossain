import React from 'react';

const Services = () => {
    const services = [
        {
            img: './img/services/fb.png',
            service_name: 'Facebook Marketing',
            service_description: "Achieve Lasting Business Success with Marketer Mitu's In-Depth Facebook Marketing Approaches"
        },
        {
            img: './img/services/seo.png',
            service_name: 'SEO Management',
            service_description: "Stay Ahead in Search Engine Rankings with Marketer Mitu's Tailored SEO Management Strategies and Executio"
        },
        {
            img: './img/services/google-marketing.png',
            service_name: 'Google Marketing',
            service_description: "Optimize Your Brand's Reach and Engagement with Marketer Mitu's Targeted and Effective Google Marketing Strategies"
        },
        {
            img: './img/services/email-marketing.png',
            service_name: 'Email Marketing',
            service_description: "Harness the Power of Personalized Communication Marketer Mitu's Expert Guide to Effective Email Marketing Strategies"
        },
        {
            img: './img/services/Social-Media-Management.png',
            service_name: 'Social Media Management',
            service_description: "Harness the Power of Personalized Communication Marketer Mitu's Expert Guide to Effective Email Marketing Strategies",
            class_name: 'different-service'
        }
    ]
    return (
        <section className='services-section section-spacing' id='services-section'>
            <div className='content-container'>
                <div className='service-text text-center'>
                    <p className="unlock-text mb-2" style={{ display: 'inline-block' }}>OUR SERVICES</p>
                    <h2 className='fs-1 fw-medium my-4 line-height-medium'>Marketer Mitu Provides The Best Service For You</h2>
                    <p className='lead mb-5 section-subtitle' style={{ color: 'lightgray' }}>Experience top-tier services with Marketer Mitu, delivering unmatched solutions tailored just for you. Elevate your success with expert assistance.</p>
                </div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                    <div className='col'>
                        <div className='single-service service-overview' data-aos="fade-up">
                            <img src="./img/services/service.jpg" alt="" />
                        </div>
                    </div>
                    {
                        services.map((service, index) => <Service key={index} service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};


const Service = ({ service }) => {
    const { img, service_name, service_description, class_name } = service;
    return (
        <div className='col'>
            <div className='single-service' data-aos="fade-up">
                <div className='single-service-container'>
                    <img src={img} alt="" />
                    <h5 className='mb-2 text-dark'>{service_name}</h5>
                    <p>{service_description}</p>
                </div>
                <div className={`extra-layout ${class_name ? class_name : ''}`}></div>
            </div>
        </div>
    );
};


export default Services;