'use client'
import React from 'react'
import Navbar from './(main)/navbar';
import './home.css'


const Home = () => {
  return (
    <>
      <Navbar />
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
            <h1 className="text-5xl font-extrabold text-center leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
              Stay <span className="text-[#1ca9c9] text-decoration-line: underline">Up To Date</span> With us.
            </h1>
          </div>
        </div>
      </div>

      {/* College Container Section */}
      <div className="college-container bg-blue-900">
        <h2>Nearby Universities</h2>
        
        <div className="college-item">
          <div className="college-image-container">
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="college-image rounded-circle-left" src={"/images/bml.jpeg"} alt="College 1" />
            </a>
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
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="college-image rounded-circle-right" src={"/images/lnmiit.jpg"} alt="College 2" />
            </a>
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
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="college-image rounded-circle-left" src={"/images/amity.jpg"} alt="College 3" />
            </a>
          </div>
          <div className="college-text-container">
            <h3>AMITY UNIVERSITY</h3>
            <p>Amity University provides world-class education in diverse streams including engineering, management, medical and others.</p>
          </div>
        </div>

        <div className="college-item reverse">
          <div className="college-image-container">
            <a href="https://www.amity.edu/" target="_blank" rel="noopener noreferrer">
              <img className="college-image rounded-circle-right" src={'/images/raffels.jpeg'} alt="College 4" />
            </a>
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
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-[#E0FFFF] font-semibold">
         
          The Insightful Chronicles

        </h3>
        <div className="prose prose-slate prose-sm text-[#1ca9c9]">
          <p>
          Dive into a world of diverse perspectives and deep insights. The Insightful Chronicles offers thoughtful analysis, compelling stories, and practical advice on a wide range of topics.
          </p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href="/browse-blog"
        >
          Learn more
          <span className="sr-only">
            , Completely unstyled, fully accessible UI components
          </span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <img
        src="https://i.pinimg.com/564x/b9/49/f1/b949f1580eea68e3a1af05f9bfcd0dc1.jpg"
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width={1216}
        height={640}
      />
    </li>
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-[#bc4749] font-semibold">
         
          Everyday Wonders
        </h3>
        <div className="prose prose-slate prose-sm text-gray-600">
          <p>
          Discover the wonders in everyday life with our captivating stories and insightful posts. Everyday Wonders celebrates the small moments and big ideas that make life extraordinary.
          </p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href="/browse-blog"
        >
          Learn more
          <span className="sr-only">
            , Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
          </span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <img
        src="https://i.pinimg.com/736x/45/09/0f/45090f3b878c3f926eb667248bb1c0af.jpg"
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full h-1/3"
        width={1216}
        height={640}
      />
    </li>
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-[#bc4749] font-semibold">
          
          Pathways to Growth
        </h3>
        <div className="prose prose-slate prose-sm text-gray-600">
          <p>
          Join us on a journey of continuous growth and self-improvement. Pathways to Growth offers practical tips, inspiring stories, and expert advice to help you navigate life’s challenges and opportunities.
          </p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href="/browse-blog"
        >
          Learn more
          <span className="sr-only">
            , Seamless SVG background patterns by the makers of Tailwind CSS.
          </span>
          <svg
            className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
            width={3}
            height={6}
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6" />
          </svg>
        </a>
      </div>
      <img
        src="https://i.pinimg.com/564x/f5/1a/f1/f51af1108f1372182c1e32aa161f7009.jpg"
        alt=""
        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
        width={1216}
        height={640}
      />
    </li>
  </ul>

      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          <div></div>
          <ul className="text-center">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-white">
              <a style={{color:"#1ca9c9"}} className="inline-flex gap-x-2 text-lg text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="/help">
                HELP
              </a>
            </li>
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

export default Home
