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


      <div className="rounded overflow-hidden shadow-lg flex flex-col">
      
      <div className="relative ">
        <a href={`/view-clubs/${compt._id}`}>
          <img
            className="w-full  object-cover h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80"
            src={`http://localhost:5000/uploads/${compt.image}`}
            alt="Sunset in the mountains"
          />

        </a>
      </div>
  
      <div className="px-6 py-4 mb-auto">
        <a
          href="#"
          className="font-medium text-[#E0FFFF] text-lg inline-block hover:text-white transition duration-500 ease-in-out inline-block mb-2"
        >
          {compt.topic}
        </a>
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