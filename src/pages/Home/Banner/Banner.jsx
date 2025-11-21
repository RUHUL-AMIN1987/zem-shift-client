import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
                <div>
                    <img src={bannerImg1} />
                        <div className="absolute bottom-10 left-20 flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                Shop Now
                            </button>

                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                                Learn More
                            </button>
                        </div>
                </div>
                <div>
                    <img src={bannerImg2}/>
                        <div className="absolute bottom-10 left-20 flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                Shop Now
                            </button>

                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                                Learn More
                            </button>
                        </div>
                </div>
                <div>
                    <img src={bannerImg3} />
                        <div className="absolute bottom-10 left-20 flex gap-4">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                Shop Now
                            </button>

                            <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                                Learn More
                            </button>
                        </div>
                </div>
            </Carousel>
    );
};

export default Banner;