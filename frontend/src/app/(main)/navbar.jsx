import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <>
   <div style={{ backgroundColor: "#E0FFFF" }}>
          {/* ========== HEADER ========== */}
          <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-4 border-bottom: 1px solid #333333">
            <nav
              className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center  md:px-6"
              aria-label="Global"
            >
               <div className="md:col-span-3">

<div className="w-36 self-center mr-2">
  <Link href="/"> <img
    className="w-max h-max"
    src="vibe.png"
  />
  </Link>
</div>
</div>
              {/* End Button Group */}
              {/* Collapse */}
              <div
                id="navbar-collapse-with-animation"
                className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
              >
                <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">

                  <div>
                    <a className="py-3 px-4 text-blue-700 text-lg font-semibold border border-blue-700 rounded-xl hover:bg-[#1ca9c9] hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                                          href="/clubs"
                    >
                      Clubs
                    </a>
                  </div>
                  <div>
                    <a className="py-3 px-4 text-blue-700 text-lg font-semibold border border-blue-700 rounded-xl hover:bg-[#1ca9c9] hover:text-white disabled:opacity-50 disabled:pointer-events-none"
                      href="/events"
                    >
                     Events
                    </a>
                  </div>
                  <a className="py-3 px-4 text-blue-700 text-lg font-semibold border border-blue-700 rounded-xl hover:bg-[#1ca9c9] hover:text-white disabled:opacity-50 disabled:pointer-events-none"  href="/about"
                    aria-current="page"
                  >
                    About Us
                  </a>
                </div>
              </div>
              {/* End Collapse */}
            </nav>
          </header>
          {/* ========== END HEADER ========== */}
        </div>
</>
  )
}

export default Navbar;