

import { useParams } from "react-router";
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcel', parcelId],
        enabled: !!parcelId,
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel/${parcelId}`);
            return res.data;
        }
    });
        const handlePayment = async () => {
        try {
            const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            SenderEmail: parcel.SenderEmail,
            ParcelName: parcel.ParcelName
            };

            const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
            window.location.href = res.data.url;

        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment failed. Please try again.");
        }
        }


    if (isLoading) {
        return <span className="loading loading-spinner loading-xs"></span>;
    }

    return (
        <div>
            <h1>Please pay for ${parcel.cost}: {parcel?.ParcelName}</h1>
            <button onClick={handlePayment} className="btn btn-primary text-black">Pay</button>
        </div>
    );
};

export default Payment;

