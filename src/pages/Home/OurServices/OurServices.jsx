import React from 'react';
import img1 from "../../../assets/service.png";


const OurServices = () => {
    const services = [
        {
            img: img1,
            title: "Express  & Standard Delivery",
            desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off."
        },
        {
            img: img1,
            title: "Nationwide Delivery",
            desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours."
        },
        {
            img: img1,
            title: "Fulfillment Solution",
            desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support."
        },
        {
            img: img1,
            title: "Cash on Home Delivery",
            desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product."
        },
        {
            img: img1,
            title: "Corporate Service / Contract In Logistics",
            desc: "Customized corporate services which includes warehouse and inventory management support."
        },
        {
            img: img1,
            title: "Parcel Return",
            desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
        }
    ];

    return (
        <div className="p-30 rounded-2xl my-10 bg-secondary">
            <div className='flex-col text-center items-center'>
                <h1 className="text-3xl font-bold mb-2 text-white">Our Services</h1>
                <p className="mb-6 text-white">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
                    From personal packages to <br /> business shipments — we deliver on time, every time.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-md hover:bg-[#CAEB66] transition cursor-pointer"
                    >
                        <img 
                            src={service.img} 
                            alt="" 
                            className="w-20 h-20 rounded-full bg-amber-300  mx-auto p-2"
                        />
                        <h1 className="font-bold text-xl mt-3 text-center">{service.title}</h1>
                        <p className="text-gray-600 mt-2">{service.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default OurServices;
