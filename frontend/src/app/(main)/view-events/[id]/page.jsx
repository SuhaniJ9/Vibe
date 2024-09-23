'use client';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'next/navigation';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

const ViewEvent = () => {
  const contact = useFormik({
    initialValues:{
      name:"",
      email:"",
      message:""
    },
  
  
  onSubmit: async (values,action) => {
    console.log(values);
    
    const res = await fetch('http://localhost:5000/contact/add', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(values),
           });
      console.log(res.status);
      action.resetForm();
      if(res.status === 200){
          toast.success("Query Submitted")
      }
          else
          {
              toast.error("Query Not Submitted")
          }
        
}
  });

  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();
  const fetchBlogDAta = () => {

    // Fetch blog data
    fetch('http://localhost:5000/events/getbyid/' + id)
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


  const displayEvents = () => {
    if (blogData === null) return <p>Loading...</p>;

    return (
      <>
      <div className="max-w-screen-xl relative bg-[#E0FFFF]">

        <div className="max-w-3xl mx-auto">

          <div className="mt-3 bg-blue-900 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-blue-900 relative top-0 -mt-32 p-5 sm:p-10">
              <div className="bg-cover bg-center text-center overflow-hidden">
              <img src={`http://localhost:5000/uploads/${blogData.image}`} className="h-72 w-auto mx-auto my-8" alt="" />
              </div>
              <h1 className="text-center text-[#E0FFFF] font-bold text-3xl mb-2">{blogData.topic}</h1>
             
              <div className="text-[#E0FFFF] text-center text-lg  mb-2">{blogData.description}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      <h2 className="mb-4 text-2xl font-bold dark:text-black text-center">
       Want to be a part of our team?
      </h2>
      <form id="contactForm" onSubmit={contact.handleSubmit} >
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="name"
                className="pb-1 text-xs uppercase tracking-wider"
              />
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Your name"
                className="mb-2 w-full bg-blue-900 rounded-md border border-dark:text-[#bc4749] py-2 pl-2 pr-4 shadow-md sm:mb-0"
                name="name"
                onChange={contact.handleChange}
              value={contact.values.name}
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="email"
                className="pb-1 text-xs uppercase tracking-wider"
              />
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Your email address"
                className="mb-2 bg-blue-900 w-full rounded-md border-black-500 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                name="email"
                onChange={contact.handleChange}
              value={contact.values.email}
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="textarea"
              className="pb-1 text-xs uppercase tracking-wider"
            />
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={5}
              placeholder="Why do you want to join us?" 
              className="mb-2 w-full bg-blue-900 text-white rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              defaultValue={""}
              onChange={contact.handleChange}
              value={contact.values.message}
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
    </>
    );
  };

  return (
    <div className='relative bg-[#E0FFFF] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {displayEvents()}
    </div>
  );
}

export default ViewEvent;
