import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {registerUser} = useAuth();
    const handelRegister = (data) => {
  console.log(data);

    registerUser(data.email, data.password)
        .then((result) => {
        console.log("User created:", result.user);
        })
        .catch((error) => {
        console.log("Error:", error.message);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handelRegister)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" 
                        {...register('email', {required: true})} 
                        className="input" 
                        placeholder="Email"
                     />
                        {
                            errors.email?.type==='required' && 
                            <p className='text-red-500'>Email is Required</p>
                        }
                    {/* PassWord  */}
                    <label className="label">Password</label>
                    <input type="password" 
                        {...register('password', {
                            required: true,
                            minLength: 6
                            })}
                        className="input" 
                        placeholder="Password" 
                    />
                        {
                            errors.password?.type==='required' && 
                            <p className='text-red-500'>Password is Required</p>
                        }
                        {
                            errors.password?.type=== 'minLength' && 
                            <p className='text-red-500'>Password 6 digit or more</p> 
                        }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral w-1/2 mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;