'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar';


const BrowseClubs = () => {
  const [competition, setcompetition]=useState([]);

  const fetchcompetitions = () => {
    fetch("http://localhost:5000/clubs/getall")
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setcompetition(data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchcompetitions();
  } , []);

  const displaycompetitions = () => {
    return competition.map((compt) => (


      <div className="rounded overflow-hidden shadow-lg flex flex-col ">
      
      <div className="relative ">
        <a href={`/view-clubs/${compt._id}`}>
          <img
            className="w-full  object-cover h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80"
            src={`http://localhost:5000/uploads/${compt.image}`}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
           Prize: {compt.prize}
          </div>
      </div>
  
      <div className="px-6 py-4 mb-auto">
        <a
          href="#"
          className="font-medium text-gray-600 text-lg inline-block hover:text-[#bc4749] transition duration-500 ease-in-out inline-block mb-2"
        >
          {compt.topic}
        </a>
        <p className="text-[#bc4749] text-sm">
          {compt.description}
        </p>
      </div>
    </div>
    
    ))

  }
  return (
    <>
    <Navbar>

    </Navbar>
    <div className=' bg-blue-900'>
    <div className="border border-blue-400  flex justify-between text-sm ">
    </div>
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16  ">
    
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
  
    {displaycompetitions()}

    </div>
  </div>
</div>
 </>
  )
}


export default BrowseClubs;