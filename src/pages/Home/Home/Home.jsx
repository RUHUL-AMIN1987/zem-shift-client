import React from 'react';
import Banner from '../Banner/Banner';
import HowItWork from '../HowItWork/HowItWork';
import OurServices from '../OurServices/OurServices';
import Brand from '../Brand/Brand';
import Reviews from '../Reviews/Reviews';
import AboutUs from '../AboutUs/AboutUs';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import Subscribe from '../Subscribe/Subscribe';

const reviewsPromise = fetch('/reviews.json').then(res=>res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <HowItWork></HowItWork>
            <OurServices></OurServices>
            <Brand></Brand>
            <PlaceOrder></PlaceOrder>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;