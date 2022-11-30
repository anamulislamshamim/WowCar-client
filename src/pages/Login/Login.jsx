/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
export const Register = () => {
    const { loginWithEmailAndPassword } = useContext(authContext);
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();
    const loginHandeler = (data) => {
        loginWithEmailAndPassword(data.email, data.password)
        .then(result => {
            if(result.user.uid){
                toast.success("Successfully login!");
                navigate("/");
            }
        })
    };
    return (
        <div className="relative">
            <div className="relative bg-white bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="flex items-center justify-center lg:w-1/2">
                            <img className="object-cover" src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=826&t=st=1666679645~exp=1666680245~hmac=17decb14e2860cba9641ddbf285e579e9e562e9e87c4706f88ee7f71c3954e67" alt="" />
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Login
                                </h3>
                                <form onSubmit={handleSubmit(loginHandeler)}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="Email"
                                            {...register("email",{ required:"Email is required!"})}
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                        {
                                            errors.email && <p className='text-red-800'>{ errors.email.message }</p>
                                        }
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="Password"
                                            {...register("password",{ required:"Password is required!"})}
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                        {
                                            errors.password && <p className='text-red-800'>{ errors.password.message }</p>
                                        }
                                    </div>
                                    <p><Link className='mb-1 sm:mb-2 text-green-600'>Forgotten password?</Link></p>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        Have not account yet? <Link to="/register" className='text-green-400'>Please Register</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;