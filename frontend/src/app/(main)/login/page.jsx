'use client'
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Formik, useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useAppContext from '@/app/context/appcontext';

const Login = () => {

    const { setLoggedIn } = useAppContext()

    const router = useRouter();
    const addUserSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
    });

    const addUser = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values, action) => {
            console.log(values);
         
            const res = await fetch("http://localhost:5000/user/authenticate", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              console.log(res.status);
        
              if (res.status === 200) {
                toast.success("Login Successful");
                const data = await res.json();
                console.log(data);
                sessionStorage.setItem('isloggedIn', true);
                if (data.role == 'admin') {
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    router.push("/admin/manageuser");
                } else {
                    sessionStorage.setItem('user', JSON.stringify(data));
                    setLoggedIn(true);
                    router.push("/");   
                }
              } else {
                toast.error("Something went wrong");
              }
        },
        validationSchema: addUserSchema
    });

    return (
        <section style={{ backgroundColor: "#e0f7fa" }} className="min-h-screen flex box-border justify-center items-center">
            <div className="shadow-2xl rounded-2xl flex max-w-3xl p-5 items-center">
                <div className="md:w-3/4 px-8">
                    <h2 className="font-bold text-3xl font-serif mx-3 text-blue-800">Login</h2>
                    <form onSubmit={addUser.handleSubmit} className="flex flex-col gap-4">
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mx-3">
                                <label htmlFor="" className="text-xs text-blue-800 font-semibold px-1">
                                    Email
                                </label>
                                {addUser.touched.email && <span className="text-red-500">{addUser.errors.email}</span>}
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <MdOutlineMail className='text-white text-xl' />
                                    </div>
                                    <input
                                        style={{ backgroundColor: "#1ca9c9" }}
                                        type="email"
                                        className="w-full text-white -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-blue-800 outline-none focus:border-indigo-500"
                                        placeholder="john@example.com"
                                        id="email"
                                        name="email"
                                        value={addUser.values.email}
                                        onChange={addUser.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex -mx-3">
                            <div className="w-full px-3 mx-3">
                                <label htmlFor="" className="text-xs text-blue-800 font-semibold px-1">
                                    Password
                                </label>
                                {addUser.touched.password && <span className="text-red-500">{addUser.errors.password}</span>}
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <CiLock className='text-xl text-white' />
                                    </div>
                                    <input
                                        style={{ backgroundColor: "#1ca9c9" }}
                                        type="password"
                                        className="w-full -ml-10 text-white pl-10 pr-3 py-2 rounded-lg border-2 border-blue-800 outline-none focus:border-indigo-500"
                                        placeholder="********"
                                        id="password"
                                        name="password"
                                        value={addUser.values.password}
                                        onChange={addUser.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            style={{ backgroundColor: "#1ca9c9" }}
                            className="text-white py-2 mx-2 rounded-xl hover:scale-105 duration-300 hover:bg-blue-800 font-medium"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-sm flex text-blue-800 justify-between items-center container-mr">
                        <p className="mr-3 md:mr-0">If you don't have an account..</p>
                        <Link style={{ backgroundColor: "#1ca9c9" }} href="/signup" className="text-white bg-blue-800 hover:border-blue-800 rounded-xl py-2 px-5 hover:scale-105 hover:bg-blue-800 font-semibold duration-300">
                            Signup now
                        </Link>
                    </div>
                </div>
                <div className="md:block hidden w-1/2">
                    <img
                        className="rounded-2xl max-h-[1600px]"
                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s14P5eUcZbMKowFLpn5e_A.jpeg"
                        alt="login form image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Login;
