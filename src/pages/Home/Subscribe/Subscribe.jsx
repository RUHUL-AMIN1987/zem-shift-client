import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thanks For Subscribe",
                showConfirmButton: false,
                timer: 1500
                });
            setEmail('');
        } else {
            alert('Please enter a valid email');
        }
    };

    return (
        <div className="bg-[#03373d]/80 py-16 px-6 rounded-2xl text-center my-10">
            <h1 className="text-3xl font-bold text-white mb-4">Subscribe</h1>
            <p className="text-white/80 mb-8">Please subscribe to get updates on our services.</p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 rounded-lg w-full sm:w-auto flex-grow focus:outline-1 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="btn bg-[#d73e19] text-white px-6 py-3 rounded-lg hover:bg-[#b83315] transition"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Subscribe;
