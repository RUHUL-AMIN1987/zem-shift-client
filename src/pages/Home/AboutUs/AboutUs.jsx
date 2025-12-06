// import React from 'react';

// const AboutUs = () => {
//     return (
//         <div className="hero bg-[#03373d]/80 min-h-80% my-10 py-30 px-10">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <img 
//                     src="https://1fetch.co.za/wp-content/uploads/2024/05/speedy-delivery-motorcycle-courier-action-dusk-768x594.jpg"
//                     className="w-full lg:w-1/2 flex justify-center"
//                 />
//                 <div className='w-full lg:w-1/2'>
//                 <h1 className="text-3xl text-white font-bold">Delivering Trust, Speed & Reliability—Every Step of the Way</h1>
//                     <p className="py-6 text-white">
//                         At AssetVerse Delivery, we believe that every parcel carries more than just items—it carries trust, commitment, and responsibility. Our mission is to provide fast, secure, and reliable delivery services that make sending and receiving packages easier than ever.
//                         From urgent same-day deliveries to business-friendly bulk logistics, we are dedicated to ensuring every shipment reaches safely and on time. With real-time tracking, professional riders, smart route management, and a customer-first service approach, we are transforming the courier experience in Bangladesh.
//                         Whether you're an individual sending a personal parcel or a business managing daily deliveries, we stand beside you with dependable support, transparent pricing, and seamless service.
//                         Your parcel is our priority—always.
//                     </p>
//                     <button className="btn bg-[#d73e19] text-white">Get Started</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutUs;

import React from 'react';
import { Link } from 'react-router';

const AboutUs = () => {
    return (
        <div className="relative bg-[#03373d]/80 min-h-[80vh] my-10 py-10 px-10">

            {/* Top Heading */}
            <div className="text-center text-white mb-10 relative ">
                <h1 className="text-4xl lg:text-5xl font-bold">
                    About <span className='text-red-500'>AssetVerse</span> Delivery
                </h1>
            </div>

            {/* Main Hero Content */}
            <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-10 relative z-0">
                
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img 
                        src="https://1fetch.co.za/wp-content/uploads/2024/05/speedy-delivery-motorcycle-courier-action-dusk-768x594.jpg"
                        className="w-full max-w-md rounded-lg shadow-2xl"
                        alt="Speedy Delivery"
                    />
                </div>

                {/* Text */}
                <div className='w-full lg:w-1/2 text-white'>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Delivering Trust, Speed & Reliability—Every Step of the Way
                    </h2>
                    <p className="py-6 opacity-90">
                        At AssetVerse Delivery, we believe that every parcel carries more than just items—it carries trust, commitment, and responsibility. Our mission is to provide fast, secure, and reliable delivery services that make sending and receiving packages easier than ever.
                        From urgent same-day deliveries to business-friendly bulk logistics, we are dedicated to ensuring every shipment reaches safely and on time. With real-time tracking, professional riders, smart route management, and a customer-first service approach, we are transforming the courier experience in Bangladesh.
                        Whether you're an individual sending a personal parcel or a business managing daily deliveries, we stand beside you with dependable support, transparent pricing, and seamless service.
                        Your parcel is our priority—always.
                    </p>
                    <Link to={'/about-us'} className="btn bg-[#d73e19] text-white">Get Started</Link>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
