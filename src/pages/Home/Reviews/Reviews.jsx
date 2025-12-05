import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    console.log(reviews);

    return (
        <div className='p-5 border-none shadow-sm mb-10 mt-10'>
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-bold'>Reviews</h1>
                <p className='max-w-xl mx-auto text-gray-600'>
                    Genuine feedback from our valued users. Their experiences reflect our commitment to fast 
                    delivery, secure handling, and exceptional customer service.
                </p>

            </div>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 50,
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard reviewData={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
