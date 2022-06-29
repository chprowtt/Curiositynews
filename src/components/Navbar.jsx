import React, { useState } from 'react'
import Logoo from '../assets/Logoo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook , FaInstagram , FaTwitter} from "react-icons/fa";
import  { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

function Navbar() {
    const [News,setNews] = useState(false)
    const [nav,setNav] = useState(false)
    const handleClickNews = () => setNews(false)
    const handleClick = () => setNav(!nav)
  return (
    
    
    <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
    <div>   <img src={Logoo} alt="Logo Image" style={{ width: "80px" }} /></div>

    <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes/>}
        
      </div>

    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 width-full h-screen bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'}>
    <div>   <img className = 'absolute top-0 left-6' src={Logoo} alt="Logo Image" style={{ width: "80px" }} /></div>
            <li className='hover:text-yellow-200 py-6 text-3xl hover:scale-125'>Home</li>
            <li className='hover:text-yellow-200 py-6 text-3xl hover:scale-125'>News</li>
            <li className='hover:text-yellow-200 py-6 text-3xl hover:scale-125'>Quizz</li>
            <li className='hover:text-yellow-200 py-6 text-3xl hover:scale-125'>Contact us</li>
     
      </ul>
    
    
    <div className='hidden sm:flex' >
        <ul className=' flex basis-10 gap-20 py-5 flex justify-between items-center text-white-300' >
            <li className='hover:text-yellow-200 hover:scale-125'>Home</li>
            <li className='hover:text-yellow-200 hover:scale-125 hover:list-item'>News </li>
            <li className='hover:text-yellow-200 hover:scale-125'>Quizz</li>
            <li className='hover:text-yellow-200 hover:scale-125'>Contact us</li>
            <li>
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Options
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
            </li>
        </ul>
    </div>
     {/* Social media plateforms (there are none) */}
    <div  className="hidden md:flex">
        <ul className='flex basis-5 gap-5 px-10 '>
            <li className='hover:text-yellow-200 hover:scale-125'><FaFacebook/></li>
            <li className='hover:text-yellow-200 hover:scale-125'><FaTwitter/></li>
            <li className='hover:text-yellow-200 hover:scale-125'><FaGithub/></li>
            <li className='hover:text-yellow-200 hover:scale-125'><FaLinkedin/></li>
            <li className='hover:text-yellow-200 hover:scale-125'><FaInstagram/></li>
            
            <li className='size={30}'><FaBars/> </li>
        </ul>

    </div>
    </div>
    
  )
}

export default Navbar