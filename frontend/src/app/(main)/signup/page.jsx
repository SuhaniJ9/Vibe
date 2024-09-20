'use client'
import React from 'react'
import { useFormik } from "formik"
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Link from 'next/link';
import * as Yup from 'yup'
import { toast } from 'react-toastify';

const Signup = () => {
    const addUserSchema = Yup.object().shape({});
    const signupForm = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            cpassword: ""
        },
        onSubmit: async (values,action) => {
            console.log(values);
            
            const res = await fetch('http://localhost:5000/user/add', {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(values),
                   });
              console.log(res.status);
              action.resetForm();
              if(res.status === 200){
                  toast.success("User Created")
              }
                  else
                  {
                      toast.error("User Creation Failed")
                  }
          validationSchema: addUserSchema
  }})

    return (
        <>
            {/* component */}
            <section style={{ backgroundColor: "#e0f7fa" }} className="min-h-screen flex box-border justify-center items-center">
                <div className="shadow-2xl rounded-2xl flex max-w-3xl p-5 items-center">
                    <div className="md:block hidden w-1/2">
                        <img
                            className="rounded-2xl max-h-[1600px]"
                            src="https://i.pinimg.com/564x/30/b7/ee/30b7ee15318d1fc2b42ae83666395243.jpg"
                            alt="login form image"
                        />
                    </div>
                    <div className="md:w-3/4 px-8">
                        <h2 className="font-bold text-3xl font-serif mx-3 text-blue-800">Register</h2>
                        <p  className="text-sm mt-4 mb-3 mx-3  text-blue-800">
                            If you are a new member, easily register now.
                        </p>
                        <form onSubmit={signupForm.handleSubmit} className="flex flex-col gap-4">
                            <div className="flex">
                                <div className="flex me-2 w-1/2">
                                    <div className="w-full px-3 ">
                                        <label htmlFor="" className="text-xs text-blue-800 font-semibold px-1">
                                            First Name
                                        </label>
                                        <div className="flex" >
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <FaRegUser className='text-white' />
                                            </div>
                                            <input
                                                type="text"
                                                style={{ backgroundColor: "#1ca9c9" }}
                                                className="w-full  text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-blue-600 outline-none focus:border-indigo-500 placeholder:text-gray-500"
                                                placeholder="John"
                                                id="firstname"
                                                required
                                                name="firstname"
                                                value={signupForm.values.firstname}
                                                onChange={signupForm.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3 w-1/2">
                                    <div className="w-full px-3 ">
                                        <label htmlFor="" className="text-xs text-blue-800 font-semibold px-1">
                                            Last Name
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <FaRegUser className='text-white' />
                                            </div>
                                            <input
                                                style={{ backgroundColor: "#1ca9c9" }}
                                                type="text"
                                                className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-blue-800 outline-none focus:border-indigo-500 placeholder:text-gray-500"
                                                placeholder="Doe"
                                                id="lastname"
                                                required
                                                name="lastname"
                                                value={signupForm.values.lastname}
                                                onChange={signupForm.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mx-3">
                                    <label htmlFor="" className="text-xs text-blue-800 font-semibold px-1">
                                        Email
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <MdOutlineMail className='text-white text-xl' />
                                        </div>
                                        <input
                                            style={{ backgroundColor: "#1ca9c9" }}
                                            type="email"
                                            className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-blue-800 outline-none focus:border-indigo-500 placeholder:text-gray-500"
                                            placeholder="john@example.com"
                                            id="email"
                                            required
                                            name="email"
                                            value={signupForm.values.email}
                                            onChange={signupForm.handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex w-1/2">
                                    <div className="w-full px-3 text-blue-800 mb-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">
                                            Password
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <CiLock className='text-xl text-white ' />
                                            </div>
                                            <input
                                                style={{ backgroundColor: "#1ca9c9" }}
                                                type="password"
                                                className="w-full -ml-10 text-white pl-10 pr-3 py-2 rounded-lg border-2 border-blue-800 outline-none focus:border-indigo-500 placeholder:text-gray-500"
                                                placeholder="********"
                                                id="password"
                                                required
                                                name="password"
                                                value={signupForm.values.password}
                                                onChange={signupForm.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-1/2">
                                    <div className="w-full text-blue-800 px-3 mb-3">
                                        <label htmlFor="" className="text-xs font-semibold px-1">
                                            Confirm Password
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <CiLock className='text-xl text-white' />
                                            </div>
                                            <input
                                                style={{ backgroundColor: "#1ca9c9" }}
                                                type="password"
                                                className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-blue-800 outline-none focus:border-indigo-500 placeholder:text-gray-500"
                                                placeholder="********"
                                                id="cpassword"
                                                required
                                                name="cpassword"
                                                value={signupForm.values.cpassword}
                                                onChange={signupForm.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                style={{ backgroundColor: "#1ca9c9" }}
                                className="text-white py-2 mx-2 rounded-xl hover:scale-105 duration-300 hover:bg-blue-800 font-medium "
                                type="submit"
                            >
                                Register
                            </button>
                        </form>
                        <div className="mt-4 text-sm flex text-blue-800 justify-between items-center container-mr">
                            <p className="mr-3 md:mr-0">If you have an account..</p>
                            <Link style={{ backgroundColor: "#1ca9c9" }} href="/login" className="text-white bg-blue-800 hover:border-blue-800 rounded-xl py-2 px-5 hover:scale-105 hover:bg-blue-800 font-semibold duration-300">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
