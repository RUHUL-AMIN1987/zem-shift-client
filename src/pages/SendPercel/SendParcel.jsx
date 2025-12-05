// import React from 'react';
// import { useForm, useWatch } from 'react-hook-form';
// import { useLoaderData } from 'react-router';

// const SendParcel = () => {
//     const {register, handleSubmit, control, formState:{error}} = useForm();
//     const serviceCenters = useLoaderData();
//     const regionsDuplicate = serviceCenters.map(c=>c.region);
//     const region = [...new Set(regionsDuplicate)];
//     console.log(region);
//     const senderRegion = useWatch({control, name: 'senderRegion'});

//     const receiverRegion = useWatch({control, name: "receiverRegion"});



//     const districtByRegion = region =>{
//         const regionDistrict =serviceCenters.filter(c=>c.region===region);
//         const district = regionDistrict.map(d=>d.district);
//         return district;
//     }

//     const handelSendParcel = (data) =>[
//             console.log(data)
//     ]
//     return (
//         <div className='mt-5'>
//             <h1 className='text-5xl font-bold'>Send A Parcel</h1>

//             <form onSubmit={handleSubmit(handelSendParcel)} className='py-10 p-4'> 

//                 <div className='py-5'>
//                     {/* document */}
//                      <label className="label mr-6">
//                         <input 
//                             type="radio" value="document" {...register('parcelType')} 
//                             className="radio" defaultChecked />
//                             Document</label>
//                     {/* Non-document */}
//                      <label className="label">
//                         <input 
//                             type="radio" 
//                             value="non-document" {...register('parcelType')} 
//                             className="radio"/>
//                             Non-Document</label>
//                 </div>
//                 <div className='grid grid-cols-1 md:grid-cols-2'>
//                     {/* parcel information */}
//                      <fieldset className="fieldset">
//                         <label className="label">Parcel Name</label>
//                             <input 
//                                 type="text" {...register('ParcelName')} 
//                                 className="input" 
//                                 placeholder="Parcel Name" 
//                             />
//                     </fieldset>
//                     <fieldset className="fieldset">
//                         <label className="label">Parcel Wight (kg)</label>
//                             <input 
//                                 type="number" {...register('ParcelName')} 
//                                 className="input" 
//                                 placeholder="Parcel Wight" 
//                             />
//                     </fieldset>
//                 </div>
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                     <div>
//                         {/* Sender Information */}
//                         <fieldset className="fieldset">
//                          <h2 className="text-2xl text-bold">Sender Information</h2>
//                             <label className="label">Sender Name</label>
//                                 <input 
//                                     type="text" {...register('SenderName')} 
//                                     className="input" 
//                                     placeholder="Sender Name" 
//                                 />
//                             <label className="label">Sender Email</label>
//                                 <input 
//                                     type="email" {...register('SenderEmail')} 
//                                     className="input" 
//                                     placeholder="Sender Email" 
//                                 />
//                             <label className="label">Sender Address</label>
//                                 <input 
//                                     type="text" {...register('SenderAddress')} 
//                                     className="input" 
//                                     placeholder="Sender Address" 
//                                 />
//                             <label className="label">Sender Phone No</label>
//                                 <input 
//                                     type="number" {...register('SenderPhoneNo')} 
//                                     className="input" 
//                                     placeholder="Sender Phone No" 
//                                 />
//                                     {/* sender Regions */}
//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Sender Regions</legend>
//                                         <select {...register('senderRegion')} defaultValue="Pick a regions" className="select">
//                                             <option disabled={true}>Pick a regions</option>
//                                             {
//                                                 region.map((r, i)=><option key={i} value={r}>{r}</option>)
//                                             }
//                                         </select>
//                                 </fieldset>
//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Sender District</legend>
//                                         <select {...register('senderDistrict')} defaultValue="Pick a district" className="select">
//                                             <option disabled={true}>Pick a District</option>
//                                             {
//                                                 districtByRegion(senderRegion).map((r, i)=><option key={i} value={r}>{r}</option>)
//                                             }
//                                         </select>
//                                 </fieldset>
                            
//                             <label className="label">Pickup Instruction</label>
//                                 <textarea {...register("SenderInstruction")} 
//                                     className="textarea" 
//                                     placeholder="Pickup Instruction"
//                                 ></textarea>
//                         </fieldset>
//                     </div>
//                     <div>
//                         {/* Receiver Information */}
//                         <fieldset className="fieldset">
//                          <h2 className="text-2xl text-bold">Receiver Information</h2>
//                             <label className="label">Receiver Name</label>
//                                 <input 
//                                     type="text" {...register('ReceiverName')} 
//                                     className="input" 
//                                     placeholder="Receiver Name" 
//                                 />
//                             <label className="label">Receiver Email</label>
//                                 <input 
//                                     type="email" {...register('ReceiverEmail')} 
//                                     className="input" 
//                                     placeholder="Receiver Email" 
//                                 />
//                             <label className="label">Receiver Address</label>
//                                 <input 
//                                     type="text" {...register('ReceiverAddress')} 
//                                     className="input" 
//                                     placeholder="Receiver Address" 
//                                 />
//                             <label className="label">Receiver Phone No</label>
//                                 <input 
//                                     type="number" {...register('ReceiverPhoneNo')} 
//                                     className="input" 
//                                     placeholder="Receiver Phone No" 
//                                 />
//                             <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Receiver Regions</legend>
//                                         <select {...register('receiverRegion')} defaultValue="Pick a regions" className="select">
//                                             <option disabled={true}>Pick a regions</option>
//                                             {
//                                                 region.map((r, i)=><option key={i} value={r}>{r}</option>)
//                                             }
//                                         </select>
//                                 </fieldset>
//                                 <fieldset className="fieldset">
//                                     <legend className="fieldset-legend">Receiver District</legend>
//                                         <select {...register('receiverDistrict')} defaultValue="Pick a district" className="select">
//                                             <option disabled={true}>Pick a District</option>
//                                             {
//                                                 districtByRegion(receiverRegion ).map((r, i)=><option key={i} value={r}>{r}</option>)
//                                             }
//                                         </select>
//                                 </fieldset>
//                             <label className="label">Receiver Instruction</label>
//                                 <textarea {...register("ReceiverInstruction")} 
//                                     className="textarea" 
//                                     placeholder="Receiver Instruction"
//                                 ></textarea>
//                         </fieldset>
//                     </div>
//                 </div>
//                 {/* Button  */}
//                 <button className='btn btn-primary text-white' type="submit">Send Parcel</button>
//             </form>
//         </div>
//     );
// };

// export default SendParcel;



import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {
    const {
            register, 
            handleSubmit, 
            control, 
            // formState:{errors}
            } = useForm();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();


    const regionsDuplicate = serviceCenters.map(c=>c.region);
    const region = [...new Set(regionsDuplicate)];
    console.log(region);


    const senderRegion = useWatch({control, name: 'senderRegion'});
    const receiverRegion = useWatch({control, name: "receiverRegion"});

    const districtByRegion = region =>{
        if(!region) return [];
        const regionDistrict =serviceCenters.filter(c=>c.region===region);
        const district = regionDistrict.map(d=>d.district);
        return district;
    }

    const handelSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
        cost = isSameDistrict ? 60 : 80;
    } else {
        if (parcelWeight < 3) {
            cost = isSameDistrict ? 110 : 150;
        } else {
            const minCharge = isSameDistrict ? 110 : 150;
            const extraWeight = parcelWeight - 3;
            const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
            cost = minCharge + extraCharge;
        }
    }

    console.log('cost', cost);
    data.cost = cost;
    data.paymentStatus = 'pending';

    Swal.fire({
        title: "Are you sure?",
        text: `You will be charged ${cost} TK`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Agree!"
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.post('/parcel', data)
                .then(res => {
                    console.log('after saving data', res.data);
                    Swal.fire({
                        title: "Added!",
                        text: "Your parcel has been successfully added.",
                        icon: "success"
                    });
                })
                .catch(err => {
                    console.error(err);
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong while adding your parcel.",
                        icon: "error"
                    });
                });
        }
    });
};

    



    return (
        <div className='mt-10 bg-gray-50 min-h-screen pb-20'>
            <div className='max-w-5xl mx-auto px-4'>
                <h1 className='text-5xl font-bold text-center text-indigo-700 mb-2'> Request an Asset</h1>
                <p className='text-center text-gray-600 text-lg mb-10'>Fill up the form below to send your parcel safely</p>

                <form onSubmit={handleSubmit(handelSendParcel)} className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>

                    {/* Parcel Type */}
                    <div className='py-6 text-center bg-gray-100 rounded-xl mb-8'>
                        <label className="label cursor-pointer mx-6">
                            <input type="radio" value="document" {...register('parcelType')} className="radio radio-primary radio-lg" defaultChecked />
                            <span className="ml-3 text-xl font-semibold">Document</span>
                        </label>
                        <label className="label cursor-pointer mx-6">
                            <input type="radio" value="non-document" {...register('parcelType')} className="radio radio-accent radio-lg"/>
                            <span className="ml-3 text-xl font-semibold">Non-Document</span>
                        </label>
                    </div>

                    {/* Parcel Name & Weight */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
                        <fieldset className="fieldset">
                            <label className="label text-lg font-semibold">Parcel Name</label>
                            <input type="text" {...register('ParcelName')} className="input input-bordered input-lg w-full" placeholder="Parcel Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label text-lg font-semibold">Parcel Weight (kg)</label>
                            <input type="number" step="0.1" {...register('parcelWeight')} className="input input-bordered input-lg w-full" placeholder="Parcel Weight" />
                        </fieldset>
                    </div>

                    {/* Sender & Receiver Side by Side */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                        {/* Sender */}
                        <div className='bg-blue-50 rounded-2xl p-8 border-2 border-blue-200'>
                            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Sender Information</h2>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Sender Name</label>
                                <input 
                                    type="text" {...register('SenderName')} 
                                    className="input input-bordered w-full" 
                                    defaultValue={user?.displayName}
                                    placeholder="Sender Name" 
                                />
                                </fieldset>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Sender Email</label>
                                <input 
                                    type="email" {...register('SenderEmail')} 
                                    className="input input-bordered w-full" 
                                    defaultValue={user?.email}
                                    placeholder="Sender Email" 
                                />
                                </fieldset>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Sender Address</label>
                                <input 
                                    type="text" {...register('SenderAddress')} 
                                    className="input input-bordered w-full" 
                                    placeholder="Sender Address" 
                                />
                                </fieldset>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Sender Phone No</label>
                                <input 
                                    type="number" {...register('SenderPhoneNo')} 
                                    className="input input-bordered w-full" 
                                    placeholder="Sender Phone No" 
                                />
                                </fieldset>

                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend font-semibold">Sender Region</legend>
                                <select {...register('senderRegion')} className="select select-bordered w-full">
                                    <option disabled value="">Pick a region</option>
                                    {region.map((r)=><option key={r} value={r}>{r}</option>)}
                                </select>
                            </fieldset>

                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend font-semibold">Sender District</legend>
                                <select {...register('senderDistrict')} className="select select-bordered w-full" disabled={!senderRegion}>
                                    <option>{senderRegion ? "Pick a District" : "First select region"}</option>
                                    {districtByRegion(senderRegion).map((d)=><option key={d} value={d}>{d}</option>)}
                                </select>
                            </fieldset>

                            <label className="label font-semibold">Pickup Instruction</label>
                            <textarea {...register("SenderInstruction")} className="textarea textarea-bordered w-full h-28" placeholder="Pickup Instruction (optional)"></textarea>
                        </div>

                        {/* Receiver */}
                        <div className='bg-purple-50 rounded-2xl p-8 border-2 border-purple-200'>
                            <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">Receiver Information</h2>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Receiver Name</label>
                                <input 
                                    type="text" {...register('ReceiverName')} 
                                    className="input input-bordered w-full" 
                                    placeholder="Receiver Name" 
                                />
                                </fieldset>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Receiver Email</label>
                                <input 
                                    type="email" {...register('ReceiverEmail')} 
                                    className="input input-bordered w-full" 
                                    placeholder="Receiver Email" 
                                />
                                </fieldset>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Receiver Address</label>
                                <input 
                                    type="text" {...register('ReceiverAddress')} 
                                    className="input input-bordered w-full" 
                                    placeholder="Receiver Address" 
                                />
                                </fieldset>
                            
                            <fieldset className="fieldset mb-4"><label className="label">Receiver Phone No</label>
                                <input 
                                    type="number" {...register('ReceiverPhoneNo')} 
                                    className="input input-bordered w-full" 
                                    placeholder="Receiver Phone No" 
                                />
                                </fieldset>

                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend font-semibold">Receiver Region</legend>
                                <select {...register('receiverRegion')} className="select select-bordered w-full">
                                    <option disabled value="">Pick a region</option>
                                    {region.map((r)=><option key={r} value={r}>{r}</option>)}
                                </select>
                            </fieldset>

                            <fieldset className="fieldset mb-4">
                                <legend className="fieldset-legend font-semibold">Receiver District</legend>
                                <select {...register('receiverDistrict')} className="select select-bordered w-full" disabled={!receiverRegion}>
                                    <option>{receiverRegion ? "Pick a District" : "First select region"}</option>
                                    {districtByRegion(receiverRegion).map((d)=><option key={d} value={d}>{d}</option>)}
                                </select>
                            </fieldset>

                            <label className="label font-semibold">Delivery Instruction</label>
                            <textarea {...register("ReceiverInstruction")} className="textarea textarea-bordered w-full h-28" placeholder="Delivery Instruction (optional)"></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='text-center mt-12'>
                        <button className='btn btn-primary text-black btn-wide text-xl font-bold hover:btn-accent shadow-lg'>
                            Send Parcel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendParcel;