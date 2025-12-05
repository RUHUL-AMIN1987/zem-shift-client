import React from 'react';
import img1 from "../../../assets/service.png";
import img2 from "../../../assets/service.png";
import img3 from "../../../assets/service.png";
import img4 from "../../../assets/service.png";
import img5 from "../../../assets/service.png";
import img6 from "../../../assets/service.png";


const OurServices = () => {
    const services = [
            {
                img: img1,
                title: "Same-Day Delivery",
                desc: "Urgent packages delivered within hours, ensuring maximum speed and security."
            },
            {
                img: img2,
                title: "Next-Day Delivery",
                desc: "Fast next-day delivery for business and personal shipments."
            },
            {
                img: img3,
                title: "Cash on Delivery (COD)",
                desc: "Collect payment from customers and settle securely with merchants."
            },
            {
                img: img4,
                title: "Real-Time Tracking",
                desc: "Track your parcel live with instant status updates."
            },
            {
                img: img5,
                title: "Fragile Parcel Care",
                desc: "Special handling for electronics, glass items & delicate packages."
            },
            {
                img: img6,
                title: "Corporate/Bulk Delivery",
                desc: "Daily pickup, bulk delivery, and business-friendly logistics solutions."
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
