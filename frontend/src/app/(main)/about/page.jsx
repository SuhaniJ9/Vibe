import React from 'react'
import Navbar from '../navbar';

const About = () => {
  return (
    <section className="bg-blue-700">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-extrabold text-[#E0FFFF] sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-[#E0FFFF] text-lg">
       Your Go-To Hub for Blogging and Competitions!
          </p><p className="mt-4 text-[#E0FFFF] text-lg">
Blog Nukkad is a vibrant, dynamic web application meticulously crafted using the MERN stack (MongoDB, Express.js, React, and Node.js). Our platform is designed to cater to avid bloggers, aspiring writers, and competitive spirits alike. Whether you're looking to share your thoughts with the world, read insightful articles, or participate in thrilling competitions, Blog Nukkad has something for everyone.
        </p>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://i.pinimg.com/564x/30/60/dd/3060dda0158469591de7d5ffa8c52d98.jpg"
          alt="About Us Image"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>






  <div className="py-12 bg-[#E0FFFF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="font-heading mb-4 bg-blue-700 text-[#E0FFFF] px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
        Why Choose Blog Nukkad?
        </h2>
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
        User-Friendly Interface</p>
        <p className="mt-4 max-w-2xl text-lg text-blue-700 lg:mx-auto">
Our platform is designed with you in mind. With a clean, intuitive interface, you can focus on what you do best – writing and competing.
        </p>
         
       

        <p className="font-heading mt-2 text-2xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
Secure and Reliable </p>

<p className="mt-4 max-w-2xl text-lg text-blue-700 lg:mx-auto">
We prioritize your security. Blog Nukkad uses advanced security measures to protect your data and ensure a safe and reliable experience.
</p>

<p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
Continuous Improvement
</p>
<p className="mt-4 max-w-2xl text-lg text-blue-700 lg:mx-auto">
We are committed to continuous improvement and regularly update our platform with new features and enhancements based on user feedback.

        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About;