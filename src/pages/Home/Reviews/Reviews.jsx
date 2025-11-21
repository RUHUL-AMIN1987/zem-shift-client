import React, { use } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise);
    console.log(reviews)
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl text-center'>Reviews</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque qui rerum praesentium placeat aut veniam quidem fugiat dolorum et quod, reprehenderit, amet expedita unde enim laudantium quam veritatis. Praesentium!</p>
            </div>
                <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review=>
                        <SwiperSlide key={review.id}>
                            <ReviewCard reviewData={reviews}></ReviewCard>
                        </SwiperSlide>)
                    }
                </Swiper>
                </>
        </div>
    );
};

export default Reviews;