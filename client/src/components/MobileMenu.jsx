
import { Fragment, useState, useEffect } from 'react'
import React from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const solutions = [
    {
      name: 'ABOUT ME',
      href: '/about',
    },
    {
      name: 'PORTFOLIO',
      href: '#',
    },
    { 
      name: 'GALLERY', 
      href: '#', 
    },
    {
      name: 'RECOMMENDATIONS',
      href: '#',
    },
    {
      name: 'CONTACT',
      href: '/contact',
    },
]
  
const resources = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jgwebdev38/',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jgrahamwebdev',
    },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const MobileMenu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [top, setTop] = useState(true)
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition === 0) {
      setTop(true)
    } else if (scrollPosition > 10) {
      setTop(false)
    } else if (scrollPosition < 10) {
      setTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

    return (
        <Popover className="lg:sticky lg:top-0 z-10">
        <nav className="w-[6rem] mx-auto items-center justify-between">
          <div className={`transition duration-300 ease-in-out h-auto border-black flex flex-col items-center justify-between w-[6rem]`}>
            <div className="flex items-center justify-center h-[6rem]">
              <Popover.Button className="p-2 inline-flex items-center justify-center text-black outline-none focus:ring-transparent">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-9 w-9 hover:text-blue-600 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 focus:ring-0 focus:ring-offset-0" aria-hidden="true"/>
              </Popover.Button>
            </div>               
          </div>
        </nav>
  
  
  {/********MOBILE VIEW********/}
  
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="fixed top-0 inset-x-0 transition transform origin-top-right">
            <div className="bg-white w-[25rem] h-screen flex flex-col justify-between border-r-2 border-blue-600">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="-mr-2 w-screen">
                    <Popover.Button className="p-2 inline-flex items-center justify-center text-black outline-none focus:ring-transparent">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-9 w-9 hover:text-blue-600 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center justify-between rounded-md hover:bg-blue-200"
                      >          
                      <span className="ml-3 text-base font-light text-black">{item.name}</span>
                      <ChevronRightIcon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className=" h-20 flex items-end justify-center px-5">
                <div className="flex items-center justify-around w-96 h-full">
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-md font-light text-gray-500 hover:text-blue-600 hover:font-normal transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
  
      </Popover>
  
    )
}

export default MobileMenu
