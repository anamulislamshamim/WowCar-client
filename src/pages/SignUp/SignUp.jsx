import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { authContext } from '../../contexts/AuthContext';
import { toast } from "react-hot-toast";
import { useState } from 'react';
import { useForm } from "react-hook-form";
export const Register = () => {
    console.log(process.env.REACT_APP_imagebb_secret);
    const [isSeller, setIsSeller] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [accept, setAccept] = useState(false);
    const navigate = useNavigate();
    const { signInWithGoogle, registerWithEmailAndPassword, profileUpdate } = useContext(authContext);
    const googleSignInHandeler = () => {
        signInWithGoogle().then((result) => {
            console.log(result.user);
            toast.success("Login Successful!");
            navigate("/");
        })
    };
    const submitHandeler = (data) => {
        let role;
        if (isSeller) {
            role = 'seller';
        } else {
            role = 'buyer';
        };
        const user = {
            name: data.fullName,
            email: data.email,
            role: role,
        };
        const image = data.profilePicture[0];
        const formData = new FormData();
        formData.append("image", image);
        setSignUpError("");
        registerWithEmailAndPassword(data.email, data.password)
            .then((result) => {
                if (result.user) {
                    fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imagebb_secret}`, {
                        method: "POST",
                        body: formData
                    })
                        .then(res => res.json())
                        .then((Imagebbdata) => {
                            profileUpdate(data.fullName, Imagebbdata.data?.url)
                                .then(() => {
                                    console.log("imagebb: ", data);
                                    // store the user into the mongodb database
                                    fetch(`http://localhost:4000/create-user`, {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body:JSON.stringify(user)
                                    }).then(res => res.json())
                                        .then(data => {
                                            console.log(data);
                                            toast.success("User created successfully!");
                                            navigate("/");
                                        })
                                })
                                .catch((err) => {
                                    toast.error(err);
                                })
                        })
                }
            })
    }
    return (
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative bg-white bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="flex items-center justify-center lg:w-1/2">
                            <img className="object-cover" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=826&t=st=1666678983~exp=1666679583~hmac=189fcd5312d9a57b8e505d437411c9ba0d03792856cbd7952bd7398f1b869a9b" alt="" />
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Please Sign Up
                                </h3>
                                <form onSubmit={handleSubmit(submitHandeler)}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            placeholder="Anamul Islam"
                                            {...register("fullName", { required: "User name is required!" })}
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="fullName"
                                        />
                                        {
                                            errors.fullName && <p className='text-red-800'>{errors.fullName.message}</p>
                                        }
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="profilePicture"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Profile Picture
                                        </label>
                                        <input
                                            required
                                            type="file"
                                            {...register("profilePicture", { required: "profile picture is required!" })}
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="profilePicture"
                                        />
                                        {
                                            errors.profilePicture && <p className="text-red-800">{errors.profilePicture.message}</p>
                                        }
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            {...register("email", { required: "email is required!" })}
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                        {
                                            errors.email && <p className='text-red-800'>{errors.email.message}</p>
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
                                            placeholder="a#@s123w*^&kadkTAdk"
                                            {...register("password", { required: "password is required!" })}
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                        {
                                            errors.password && <p className='text-red-800'>{errors.password.message}</p>
                                        }
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <input onClick={() => setIsSeller(!isSeller)} type="checkbox" id="seller" name="seller" value="" />
                                        <label htmlFor="seller"><Link className='text-blue-400 ml-2 text-semibold'>Are you seller?</Link></label>
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <input onClick={() => setAccept(!accept)} type="checkbox" id="checkbox" name="checkbox" value="" />
                                        <label htmlFor="checkbox"> Accept our <Link className='text-green-400' to="/terms&conditions">terms&conditions</Link></label>
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            disabled={!accept}
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                    {
                                        signUpError && <p className='text-red-800'>{signUpError}</p>
                                    }
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        Already have account? <Link to="/login" className='text-green-400'>Please Login</Link>
                                    </p>
                                </form>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        onClick={googleSignInHandeler}
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide hover:text-white transition duration-200 rounded shadow-md hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                                    >
                                        <FaGoogle /> Sign In With Google
                                    </button>
                                </div>
                                {/* <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        onClick={ githubLoginHandeler }
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide hover:text-white transition duration-200 rounded shadow-md hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                                    >
                                        <FaGithub /> Sign In With Github
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;