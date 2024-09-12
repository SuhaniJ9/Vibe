'use client'
import React from 'react'
import Navbar from './(main)/navbar';
import './home.css'

const Home = () => {
  return (
    <>
    <Navbar>

</Navbar>
    <div
  className="w-full relative bg-no-repeat bg-cover h-[500px] z-0 rounded-xl mb-16"
  style={{
    backgroundImage: 'url("https://i.pinimg.com/564x/62/3b/39/623b39f03d312ce6b8f33d213ac806d5.jpg")'
  }}
>
  <div className="relative top-0 left-0 w-full h-full z-10 bg-black/50 flex items-center justify-center flex-col gap-5 ">
    <h2 className="text-4xl font-bold font-manrope text-white"> VIBE TRIBE</h2>
    <h6 className="text-xl font-bold font-manrope text-white"> Bringing Clubs Together, For a Campus That Shines </h6>
    <div className="mt-5 sm:mt-5 mx-auto max-w-xl relative">
      
<h1 class="text-5xl font-extrabold text-center leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">Stay <span class="text-blue-600  text-decoration-line: underline">Up To Date</span> With us.</h1>

          
      </div>
  </div>
</div>



      {/* College Container Section */}
      <div className="college-container">

      <h2>Nearby Universities</h2>


        
        <div className="college-item">
          <div className="college-image-container">
            {/* <Link to="/bmlmunjal">
              <img className="college-image rounded-circle-left" src={collegeImage1} alt="College 1" />
            </Link> */}
          </div>
          <div className="college-text-container">
            <h3>BML MUNJAL</h3>
            <p>
              BML Munjal University (BMU) seeks to transform higher education in India by creating a
              world-class, innovation-led, teaching, learning and research environment. Established in 2014 by
              the founders of the Hero Group, BMU provides inter-disciplinary learning and transformative
              education that empowers students to become innovators, risk-takers and leaders who can take on
              the future.
            </p>
          </div>
        </div>

        <div className="college-item reverse">
          <div className="college-image-container">
            {/* <Link to="/lnmiit">
              <img className="college-image rounded-circle-right" src={collegeImage2} alt="College 2" />
            </Link> */}
          </div>
          <div className="college-text-container">
            <h3>LNMIIT</h3>
            <p>
              The LNMIIT is one of the best universities of India when it comes to Infrastructure, Campus,
              Hostel or Academic Facilities and Faculty. Located at outskirts of Jaipur, The LNMIIT provides
              career opportunities that no other institute can provide.
            </p>
          </div>
        </div>

        <div className="college-item">
          <div className="college-image-container">
            {/* <Link to="/amity">
              <img className="college-image rounded-circle-left" src={collegeImage3} alt="College 3" />
            </Link> */}
          </div>
          <div className="college-text-container">
            <h3>AMITY UNIVERSITY</h3>
            <p>Amity University provides world-class education in diverse streams including engineering, management, medical and others.</p>
          </div>
        </div>

        <div className="college-item reverse">
          <div className="college-image-container">
            {/* <Link to="/raffles">
              <img className="college-image rounded-circle-right" src={collegeImage4} alt="College 4" />
            </Link> */}
          </div>
          <div className="college-text-container">
            <h3>RAFFLES UNIVERSITY</h3>
            <p>
              Raffles University provides unprecedented opportunities to be taught by experts in their
              respective fields with the help of latest technological aids.
            </p>
          </div>
        </div>
      </div>

      <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
 
 <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
   <div>
   </div>

   <ul class="text-center">
     <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white">
       <a style={{color:"#1ca9c9"}} class="inline-flex gap-x-2 text-lg text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/help">
         HELP
       </a>
     </li>
     <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white">
       <a style={{color:"#1ca9c9"}} class="inline-flex gap-x-2 text-lg hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/faqs">
         FAQS
       </a>
     </li>

   </ul>
   <div class="md:text-end space-x-2">
     <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-[#1ca9c9] disabled:opacity-50 disabled:pointer-events-none" href="#">
       <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
         <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
       </svg>
     </a>
     <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-[#1ca9c9] disabled:opacity-50 disabled:pointer-events-none" href="#">
       <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
       </svg>
     </a>
     <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white hover:bg-[#1ca9c9] disabled:opacity-50 disabled:pointer-events-none" href="#">
       <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
         <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
       </svg>
     </a>
   </div>
   
 </div>
</footer>

    </>
  )
}

export default Home