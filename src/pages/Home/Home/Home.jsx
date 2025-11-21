import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import OurServices from '../OurServices/OurServices';
import Brand from '../Brand/Brand';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brand></Brand>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;