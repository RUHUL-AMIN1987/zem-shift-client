import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FiEdit } from 'react-icons/fi';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router';


const MyParcel = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcel = [], refetch } = useQuery({
        queryKey: ['myParcel', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcel?email=${user?.email}`);

            return res.data;
        }
    });

    const handleParcelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcel/${id}`)
                    .then(res => {
                        console.log(res.data);
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: res.data.message || "Your parcel request has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }

    return (
        <div>
            <h2>My Parcel: {parcel.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcel?.map((p, index) => (
                            <tr key={p._id}>
                                <th>{index + 1}</th>
                                <td>{p.ParcelName}</td>
                                <td>{p.cost}</td>
                                <td>
                                     {
                                            p?.paymentStatus === 'paid' ? 
                                            <span className='btn btn-primary text-black'>Paid</span>
                                            :
                                            <Link to={`/dashboard/payment/${p._id}`} className="btn btn-primary text-black">
                                                Pay
                                            </Link>
                                    } 
                                </td>
                                <td>{p.deliveryStatus}</td>
                                <td>
                                    <button className='btn btn-square'>
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button className='btn btn-square mx-2'>
                                        <FiEdit />
                                    </button>
                                    <button
                                        onClick={() => handleParcelDelete(p._id)}
                                        className='btn btn-square'>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcel;
