import React from 'react';
import img1 from '../../../assets/placeOrder1.png'
import img2 from '../../../assets/placeOrder2.png'
import img3 from '../../../assets/placeOrder3.png'

const PlaceOrder = () => {
    const steps = [
        {
            img: img1,
            title: 'Choose your Asset',
            desc: 'Select the asset you want to send from our platform.',
        },
        {
            img: img2,
            title: 'Place your Order',
            desc: 'Fill in recipient details and confirm your shipment quickly and securely.',
        },
        {
            img: img3,
            title: 'Wait for Delivery',
            desc: 'Our professional riders will deliver your parcel safely to the destination.',
        }
    ];

    return (
        <div className='p-10 rounded-2xl my-10 bg-secondary'>
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-white">Let's Go Stated</h1>
                <p className="text-white/80 mt-2">Follow these simple steps to get your order delivered quickly and safely.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                {steps.map((step, index) => (
                    <div key={index} className='flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md hover:scale-105 transition'>
                        <img src={step.img} alt={step.title} className="w-24 h-24 mb-4" />
                        <h2 className='text-xl font-bold mb-2'>{step.title}</h2>
                        <p className='text-gray-600'>{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaceOrder;
