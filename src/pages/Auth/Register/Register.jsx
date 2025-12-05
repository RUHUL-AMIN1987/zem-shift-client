import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';


const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {registerUser, updateUserProfile} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handelRegister = (data) => {
  console.log(data.photo[0]);
  const profileImg = data.photo[0];

    registerUser(data.email, data.password)
        .then((result) => {
        console.log("User created:", result.user);
        const formData = new FormData();
        formData.append('image', profileImg)
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_API}`
        axios.post(image_API_URL, formData)
        .then(res=>{
            console.log('after image upload', res.data.data.url)
            const userProfile = {
                displayName:data.name,
                photoURL:res.data.data.url,
            }
            updateUserProfile(userProfile)
            .then(result=>{console.log(result)})
            navigate(location.state || '/')
            .catch(error=>{console.log(error)})
        })
        })
        .catch((error) => {
        console.log("Error:", error.message);
        });
    };

    return (
        <div className="card bg-base-100 w-full mx-auto mt-4 max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-3xl text-center mt-4 font-bold'>Welcome to our zapShift</h1>
            <p className='text-center pt-4'>Create an Account</p>
            <div className="card-body">
                <form onSubmit={handleSubmit(handelRegister)}>
                    <fieldset className="fieldset">
                         <label className="label">Name</label>
                            <input 
                                type="text" 
                                {...register('name', { required: true })} 
                                className="input" 
                                placeholder="Your Name" 
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">Name is required</p>
                                )}
                         <label className="label">Photo</label>
                            <input 
                                type="file" 
                                {...register('photo', { required: true })} 
                                className="file-input" 
                                placeholder="Your Photo" 
                                />
                                {errors.photo && (
                                    <p className="text-red-500 text-sm">Photo is required</p>
                                )}
                         <label className="label">Email</label>
                            <input 
                                type="email" 
                                {...register('email', { required: true })} 
                                className="input" 
                                placeholder="Email" 
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">Email is required</p>
                                )}

                            <label className="label">Password</label>
                                <input 
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6
                                    })}
                                    className="input"
                                    placeholder="Password"
                                />

                            {/* Password Validation Messages */}
                            {errors.password?.type === "required" && (
                                <p className="text-red-500 text-sm">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-500 text-sm">
                                    Password must be at least 6 characters
                                </p>
                            )}
                        <button className="btn btn-neutral mt-4">Register</button>
                         <div>
                            <p>Already Have An Account?  
                                <Link 
                                state={location.state}
                                className='text-blue-700 underline' to={'/login'}>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </fieldset>
                </form>
                 <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;