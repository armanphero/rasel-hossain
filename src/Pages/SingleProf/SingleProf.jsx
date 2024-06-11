import React from 'react';

const SingleProf = ({ item, setModalImg}) => {
    return (
        <div data-aos="fade-up" className="portfolio--section--card" data-bs-target="#portfolioModal" data-bs-toggle="modal" onClick={() => setModalImg(item.src)}>
            <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
                {/* <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div> */}
                <p className="text-sm portfolio--link">
                    VIEW MY WORK
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="none"
                    >
                        <path
                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                            stroke="currentColor"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default SingleProf;