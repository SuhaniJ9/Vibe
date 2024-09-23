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
              <p>Rangmanch is a dynamic platform for aspiring actors and theater enthusiasts to explore drama and performance. We offer opportunities for acting, directing, and stage design through script readings, rehearsals, and performances.</p>
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
              <p>Dance Club is a welcoming space for passionate dancers to express themselves and learn new styles. Whether you're a beginner or experienced, our club provides a supportive environment for growth.</p>
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
              <p>Verismo Club is a vibrant community for music enthusiasts to explore and share their talents. Whether you’re a seasoned musician or just starting out, we welcome you to join us for weekly practice sessions, jam sessions, and performances.</p>
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
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          <div></div>
          <ul className="text-center">
            {/* <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white">
              <a style={{color:"#1ca9c9"}} className="inline-flex gap-x-2 text-lg text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/help">
                HELP
              </a>
            </li> */}
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white">
              <a style={{color:"#1ca9c9"}} className="inline-flex gap-x-2 text-lg hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/faqs">
                FAQS
              </a>
            </li>
          </ul>
          <div className="md:text-end space-x-2">
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-[#1ca9c9] disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
              </svg>
            </a>
            <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-[#1ca9c9] disabled:opacity-50 disabled:pointer-events-none" href="#">
              <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.336v-.427C14.367 5.003 11.064 0 5.026 0 3.587 0 2.156.325 0 1.716v12.568c2.156 1.39 3.587 1.716 5.026 1.716zm-.085-5.317c-.491 0-.941-.39-.941-.862 0-.472.45-.861.941-.861.492 0 .941.39.941.861 0 .472-.449.862-.941.862zm-.501-4.863c-.77 0-1.338-.327-1.338-.977 0-.651.568-.975 1.338-.975.769 0 1.336.324 1.336.975 0 .65-.567.977-1.336.977zm3.333 4.863c-.491 0-.941-.39-.941-.862 0-.472.45-.861.941-.861.492 0 .941.39.941.861 0 .472-.449.862-.941.862zm.501-4.863c-.77 0-1.338-.327-1.338-.977 0-.651.568-.975 1.338-.975.769 0 1.336.324 1.336.975 0 .65-.567.977-1.336.977z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home;
