import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {signInUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handelLogin = (data) =>{
        console.log(data);
        signInUser(data.email, data.password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state || '/')
        })
        .then(error=>{console.log(error)})
    }
    return (
            <div className="card bg-base-100 w-full mx-auto mt-4 max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-3xl text-center mt-4 font-bold'>Welcome to our zapShift</h1>
                <p className='text-center pt-4'>Please Login</p>
                <form onSubmit={handleSubmit(handelLogin)} className="card-body">
                    <fieldset className="fieldset">

                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" {...register('email', {required:true})} placeholder="Email" />
                            {
                                errors.email?.type === 'required' && <p className='text-red-600'> Email is Required</p>
                            }
                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" {...register('password', {required: true, minLength:6})} className="input" placeholder="Password" />
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters or more</p>
                            }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        
                        <div>
                            <p>New to zapShift  <Link className='text-blue-700 underline' to={'/register'}>Register</Link></p>
                        </div>
                    </fieldset>
                </form>
                <SocialLogin></SocialLogin>
            </div>
    );
};

export default Login;