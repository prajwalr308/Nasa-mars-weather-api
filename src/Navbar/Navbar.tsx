import React, { useState } from 'react'
import { Transition } from "@headlessui/react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () =>{
      setToggleMenu(!toggleMenu)
    }
  return (
    <nav className="nav flex flex-wrap items-center justify-between px-4">
    <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
    
      <span className="font-semibold text-xl tracking-tight">Mars api</span>
    </div>
  
 
  <div className="hidden md:block">
    <ul className="flex   border-b md:border-none  justify-end list-reset m-0 w-full md:w-auto ">
      <li className="border-t md:border-none">
        <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
      </li>
      
      <li className="border-t md:border-none">
        <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About</a>
      </li>
      
      <li className="border-t md:border-none">
        <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Curiosity</a>
      </li>
      
    </ul>
    </div>
    <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 absolute top-2 right-2 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 mt-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Home
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Curiosity
                </a>

             
              
              </div>
            </div>
          )}
        </Transition>
  </nav>
    
  );
}
      


export default Navbar