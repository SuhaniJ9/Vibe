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
              Your Collaborative Hub for University Interests!
            </p>
            <p className="mt-4 text-[#E0FFFF] text-lg">
              VibeTribe is a collaborative web platform designed specifically for universities and colleges. It provides a centralized space for managing club events, staying updated with notifications, and accessing calendars for all student activities.
            </p>
            <p className="mt-4 text-[#E0FFFF] text-lg">
              Whether you're organizing events, joining clubs, or simply exploring what your campus has to offer, VibeTribe is your go-to platform. Students can log in through forms, view recent events, and stay connected with their campus community.
            </p>
            <p className="mt-4 text-[#E0FFFF] text-lg">
              VibeTribe is also an open-source project, so if you're interested in collaborating, visit our GitHub:
              <a href="https://github.com/SuhaniJ9/Vibe" target="_blank" className="underline ml-2">
                VibeTribe GitHub
              </a>.
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
              Why Choose VibeTribe?
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
              User-Friendly Interface
            </p>
            <p className="mt-4 max-w-2xl text-lg text-blue-700 lg:mx-auto">
              Our platform offers an intuitive interface so you can easily navigate and participate in university events and activities.
            </p>

            <p className="font-heading mt-2 text-2xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
              Secure and Reliable
            </p>
            <p className="mt-4 max-w-2xl text-lg text-blue-700 lg:mx-auto">
              We prioritize security. VibeTribe ensures your data remains protected while providing a smooth, reliable experience.
            </p>

            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
              Continuous Improvement
            </p>
            <p className="mt-4 max-w-2xl text-lg text-blue-700 lg:mx-auto">
              We are always improving our platform based on user feedback to meet your needs better. Stay tuned for new features!
            </p>

            <p className="font-heading mt-6 text-3xl leading-8 font-semibold tracking-tight text-blue-900 sm:text-2xl">
              Meet the Developers
            </p>
            <div className="mt-8 flex flex-wrap justify-center space-x-6">
              <div className="text-center">
                <img
                  src="/images/sanjay.jpg"
                  alt="Sanjay Kohli"
                  className="w-32 h-32 object-cover rounded-full shadow-md"
                />
                <p className="mt-4 text-lg font-semibold text-blue-900">Sanjay Kohli</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/suhani.jpg"
                  alt="Suhani Jaiswal"
                  className="w-32 h-32 object-cover rounded-full shadow-md"
                />
                <p className="mt-4 text-lg font-semibold text-blue-900">Suhani Jaiswal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default About;
