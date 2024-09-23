import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { PiBrowsersDuotone } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { BsCalendar4Event } from "react-icons/bs";

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
                            className="xl:rounded-r transform  h-full fixed  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-blue-900 flex-col"
                        >
                            
                            <div style={{ width: '150px', height: '100px', padding: '10px' }} className="hidden xl:flex p-10 ml-10 justify-start items-center space-x-3">
                            <img src="/vibetribe.png" alt="logo" className="" />

                            </div>
                            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-[#E0FFFF] border-b space-y-3 pb-5 ">
                            

<Link
  href="/admin/manageuser"
  className="flex bg-[#E0FFFF] hover:border-[#1ca9c9] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#1ca9c9] font-semibold duration-300 space-x-2 focus:outline-none group"
>
  <FaRegUser className="text-xl text-blue-900 group-hover:text-white duration-300" />
  <span className="text-blue-900 group-hover:text-white duration-300">Users</span>
</Link>

<Link
  href="/admin/manageclub"
  className="flex text-blue-900 bg-[#E0FFFF] hover:border-[#1CA9C9] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#1CA9C9] font-semibold duration-300 space-x-2 focus:outline-none group"
>
  <PiBrowsersDuotone className="text-xl text-blue-900 group-hover:text-white duration-300" />
  <span className="text-blue-900 group-hover:text-white duration-300">Clubs</span>
</Link>

<Link
  href="/admin/manageevents"
  className="flex text-blue-900 bg-[#E0FFFF] hover:border-[#1CA9C9] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#1CA9C9] font-semibold duration-300 space-x-2 focus:outline-none group"
>
  <BsCalendar4Event className="text-xl text-blue-900 group-hover:text-white duration-300" />
  <span className="text-blue-900 group-hover:text-white duration-300">Events</span>
</Link>

<Link
  href="/login"
  className="flex text-blue-900 bg-[#E0FFFF] hover:border-[#1CA9C9] rounded-xl py-2 px-16 hover:scale-105 hover:bg-[#1CA9C9] font-semibold duration-300 space-x-2 focus:outline-none group"
>
  <IoIosLogOut className="text-xl text-blue-900 group-hover:text-white duration-300" />
  <span className="text-blue-900 group-hover:text-white duration-300">Log Out</span>
</Link>


                            </div>

                        </div>
                    </div>
                    <div className="p-5 ms-60 w-full bg-[#E0FFFF] overflow-auto">
                        {children}
                    </div>
                </div>

            </>



        </>
    )
}

export default Layout