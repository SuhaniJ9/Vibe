'use client';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const ViewClub = () => {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();

  const fetchBlogDAta = () => {

    // Fetch blog data
    fetch('http://localhost:5000/clubs/getbyid/' + id)
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setBlogData(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  useEffect(() => {
    fetchBlogDAta();
  }, []);

  const formatDate = (date) => {
    return new Date(date).getDay() + ', ' + new Date(date).getMonth() + ' ' + new Date(date).getDate() + ', ' + new Date(date).getFullYear();
  }

  const displayClubs = () => {
    if (blogData === null) return <p>Loading...</p>;

    return (
      <div className="max-w-screen-xl relative bg-[#f2e8cf]">

        <div className="max-w-3xl mx-auto">

          <div className="mt-3 bg-[#bc4749] rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-[#bc4749] relative top-0 -mt-32 p-5 sm:p-10">
              <div className="bg-cover bg-center text-center overflow-hidden">
              <img src={`http://localhost:5000/uploads/${blogData.image}`} className="h-72 w-auto mx-auto my-8" alt="" />
              </div>
              <div className="grid grid-cols-12 my-4 ">
                
                <div className="col-span-4">
                  <p className=' text-[#f2e8cf] text-md'>Date: {new Date(blogData.startdate).toLocaleDateString()}</p>

                  <p className="text-[#f2e8cf] text-md mt-2">
                    Written By: {" "}
                    {/* <span className="text-white ">
                      {blogData.user.firstname} {blogData.user.lastname}
                    </span> */}
                  </p>

                </div>
              </div>
              <h1 className="text-[#f2e8cf] font-bold text-3xl mb-2">{blogData.topic}</h1>
             
              <MDEditor.Markdown source={blogData.description} className='overflow-auto ' height="200px" style={{ backgroundColor: "#bc4749" }} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='relative bg-[#f2e8cf] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {displayClubs()}
    </div>
  );
}

export default ViewClub;
