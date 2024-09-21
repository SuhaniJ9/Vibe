import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { PiBrowsersDuotone } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <>

            <>
                {/* component */}
                <div className="flex">
                    <div className="">
                        <div
                            id="Main"
                            className="xl:rounded-r transform  h-full fixed  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-[#bc4749] flex-col"
                        >
                            
                            <div style={{ width: '150px', height: '100px', padding: '10px' }} className="hidden xl:flex p-10 ml-10 justify-start items-center space-x-3">
                            <img src="/vibetribe.png" alt="logo" className="" />

                            </div>
                            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-[#f2e8cf] border-b space-y-3 pb-5 ">
                                <Link href="/admin/dashboard" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-10 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <LuLayoutDashboard className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                            Dashboard
                                 </span>
                     
                                </Link>
                                <Link href="/admin/manageuser" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <FaRegUser className='text-xl text-[#bc4749]' />
                           
                            <span className='text-[#bc4749]'>
                            Users
                                 </span>
                     
                                </Link>
                                <Link href="/admin/manageclub" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-10 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <PiBrowsersDuotone className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                           Clubs
                                 </span>
                     
                                </Link>

                               
                                
                                <Link href="/" className="flex  text-[#bc4749] bg-[#f2e8cf]  hover:border-[#fdba74] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#fdba74] font-semibold duration-300 space-x-2  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                                <IoIosLogOut className='text-xl text-[#bc4749] ' />
                           
                            <span className='text-[#bc4749]'>
                            Log Out
                                 </span>
                     
                                </Link>

                            </div>
                            
                            
                           
                             <div className="flex flex-col justify-start items-center px-6 bg[#f2e8cf] mt-5">

                                <div className=" flex justify-between items-center w-full bg[#f2e8cf]">
                                    <div className="flex justify-center items-center  space-x-2">
                                        
                                        <div className="flex justify-start flex-col items-start">
                                            <p className="cursor-pointer text-sm leading-5 text-white ml-10">
                                                Suhani Jaiswal
                                            </p>
                                            <p className="cursor-pointer text-sm leading-3 text-gray-300 ml-2 mt-2">
                                                suhanijaiswal09@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="p-5 ms-60 w-full bg-[#f2e8cf] overflow-auto">
                        {children}
                    </div>
                </div>

            </>



        </>
    )
}

export default Layout