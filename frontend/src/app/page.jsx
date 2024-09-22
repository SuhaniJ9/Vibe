'use client'
import React from 'react'
import Navbar from './(main)/navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <div className="relative overflow-hidden bg-blue-900">
        <div
          className="w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl overflow-hidden"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/564x/28/fa/39/28fa398d5c04756a7bfa90af35485e55.jpg")',
          }}
        >
          <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5">
            <h2 className="text-4xl font-bold font-manrope text-[#E0FFFF]"> VIBE TRIBE </h2>
            <h6 className="text-xl font-bold font-manrope text-white">Connecting clubs together. </h6>
            <div className="mt-5 sm:mt-5 mx-auto max-w-xl relative">
              <h1 className="text-5xl font-extrabold text-center leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                Be a <span className="text-[#E0FFFF]">part of</span> our family.
              </h1>
              <div className="text-center">
                <div className="mt-5 sm:mt-6">
                  <button
                    className="m-1 py-3 px-4 text-lg font-medium rounded-lg border bg-[#E0FFFF] border-black-500 bg-black text-white shadow-sm hover:bg-[#E0FFFF] hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Chaturanga
                  </button>
                  <button
                    className="m-1 py-3 px-4 text-lg font-medium rounded-lg border bg-[#E0FFFF] border-black-500 bg-black text-white shadow-sm hover:bg-[#E0FFFF] hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Rangmanch
                  </button>
                  <button
                    className="m-1 py-3 px-4 text-lg font-medium rounded-lg border bg-[#E0FFFF] border-black-500 bg-black text-white shadow-sm hover:bg-[#E0FFFF] hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Instills
                  </button>
                  <button
                    className="m-1 py-3 px-4 text-lg font-medium rounded-lg border bg-[#E0FFFF] border-black-500 bg-black text-white shadow-sm hover:bg-[#E0FFFF] hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Verismo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-blue-900 mt-0 py-8">
        <div className="mb-10 text-3xl text-white text-center"> Nearby Universities </div>
        
        <div className="college-item flex justify-between items-center mb-10 px-8">
          <div className="college-image-container w-2/5">
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-r-full object-cover w-full" src={"/images/bml.jpeg"} alt="College 1" />
            </a>
          </div>
          <div className="college-text-container w-3/5 px-4">
            <h3 className="text-3xl mb-4 text-white">BML MUNJAL</h3>
            <p className="text-white text-lg leading-relaxed">
              BML Munjal University (BMU) seeks to transform higher education in India by creating a world-class, innovation-led, teaching, learning, and research environment.
            </p>
          </div>
        </div>

        <div className="college-item flex flex-row-reverse justify-between items-center mb-10 px-8">
          <div className="college-image-container w-2/5">
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-l-full object-cover w-full" src={"/images/lnmiit.jpg"} alt="College 2" />
            </a>
          </div>
          <div className="college-text-container w-3/5 px-4">
            <h3 className="text-3xl mb-4 text-white">LNMIIT</h3>
            <p className="text-white text-lg leading-relaxed">
              The LNMIIT is one of the best universities in India when it comes to infrastructure, campus, hostel, or academic facilities and faculty.
            </p>
          </div>
        </div>

        <div className="college-item flex justify-between items-center mb-10 px-8">
          <div className="college-image-container w-2/5">
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-r-full object-cover w-full" src={"/images/amity.jpg"} alt="College 3" />
            </a>
          </div>
          <div className="college-text-container w-3/5 px-4">
            <h3 className="text-3xl mb-4 text-white">AMITY UNIVERSITY</h3>
            <p className="text-white text-lg leading-relaxed">
              Amity University provides world-class education in diverse streams including engineering, management, medical, and others.
            </p>
          </div>
        </div>

        <div className="college-item flex flex-row-reverse justify-between items-center mb-10 px-8">
          <div className="college-image-container w-2/5">
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-l-full object-cover w-full" src={'/images/raffels.jpeg'} alt="College 4" />
            </a>
          </div>
          <div className="college-text-container w-3/5 px-4">
            <h3 className="text-3xl mb-4 text-white">RAFFLES UNIVERSITY</h3>
            <p className="text-white text-lg leading-relaxed">
              Raffles University provides unprecedented opportunities to be taught by experts in their respective fields.
            </p>
          </div>
        </div>
      </section>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 bg-blue-900">
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0 text-lg">
            <h3 className="mb-1 text-white font-semibold">Rangmanch </h3>
            <div className="prose prose-slate prose-sm [#E0FFFF]">
              <p>Rangmanch is a dynamic platform for aspiring actors and theater enthusiasts to explore drama and performance. We offer opportunities for acting, directing, and stage design through script readings, rehearsals, and performances. Join us to connect with fellow members and create unforgettable moments on stage.</p>
            </div>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 mt-6" href="/browse-clubs">
              Learn more
              <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width={3} height={6} viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </div>
          <img src="https://i.pinimg.com/564x/bc/65/79/bc65798dd2b0cafef0f552f0d86c562d.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] xl:w-full" />
        </li>

        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0 text-lg">
            <h3 className="mb-1 text-white font-semibold"> Impetus </h3>
            <div className="prose prose-slate prose-sm [#E0FFFF]">
              <p>Dance Club is a welcoming space for passionate dancers to express themselves and learn new styles. Whether you're a beginner or experienced, our club provides a supportive environment for growth. Join us for weekly dance sessions, workshops, and performances to experience the joy of movement and connect with fellow dancers!</p>
            </div>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 mt-6" href="/browse-clubs">
              Learn more
              <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width={3} height={6} viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </div>
          <img src="https://i.pinimg.com/564x/56/48/06/5648062f81626d028b1025cbded293ba.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] xl:w-full" />
        </li>

        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div className="order-1 sm:ml-6 xl:ml-0 text-lg">
            <h3 className="mb-1 text-white font-semibold"> Verismo </h3>
            <div className="prose prose-slate prose-sm [#E0FFFF]">
              <p>Verismo Club is a vibrant community for music enthusiasts to explore and share their talents. Whether you’re a seasoned musician or just starting out, we welcome you to join us for weekly practice sessions, jam sessions, and performances. Experience the joy of making music together and connect with a supportive and inspiring group of fellow music lovers!</p>
            </div>
            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 mt-6" href="/browse-clubs">
              Learn more
              <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400" width={3} height={6} viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M0 0L3 3L0 6" />
              </svg>
            </a>
          </div>
          <img src="https://i.pinimg.com/736x/e4/17/c2/e417c2752ba89baa407139aaf7c0b567.jpg" alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-5000px sm:w-[17rem] xl:w-full" />
        </li>
      </ul>
    </>
  )
}

export default Home;
