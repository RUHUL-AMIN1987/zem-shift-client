import React from 'react';
import img1 from '../../../assets/delivery-van1.png'
import img2 from '../../../assets/delivery-van.png'
import img3 from '../../../assets/delivery-van2.png'
import img4 from '../../../assets/delivery-van3.png'
const HowItWork = () => {
    
    return (
    <div className='w-11/12 mx-auto'>
        <h1 className='text-2xl font-bold '>How it Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
                <img src={img1} alt="" />
                <h1 className="font-bold text-xl mt-3">Booking Pick & Drop</h1>
                <p className="text-gray-600 mt-2">
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
                <img src={img3} alt=""  />
                <h1 className="font-bold text-xl mt-3">Cash On Delivery</h1>
                <p className="text-gray-600 mt-2">
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
                <img src={img2} alt="" />
                <h1 className="font-bold text-xl mt-3">Delivery Hub</h1>
                <p className="text-gray-600 mt-2">
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
                <img src={img4} alt=""  />
                <h1 className="font-bold text-xl mt-3">Booking SME & Corporate</h1>
                <p className="text-gray-600 mt-2">
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

        </div>
    </div>
    );
};

export default HowItWork;