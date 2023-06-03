import { Fragment, useState, useEffect, } from 'react'
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
      href: '/portfolio',
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

const Sidebar = () => {

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
        <Popover className="fixed lg:sticky lg:top-0 z-10">
      <nav className="w-[6rem] mx-auto items-center justify-between">
        <div className={`transition duration-300 ease-in-out bg-[#e8e8e7] md:h-screen h-[5.5rem] border-r-2 border-b-2 md:border-b-0 border-black flex flex-col items-center justify-between fixed w-[6rem]`}>
          <div className="flex items-center justify-center h-[6rem]">
            <Popover.Button className="p-2 inline-flex items-center justify-center text-black outline-none focus:ring-transparent">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-9 w-9 hover:text-blue-600 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110" aria-hidden="true"/>
            </Popover.Button>
          </div>   
          

          <div className='w-full h-[8rem] hidden md:flex items-center justify-around flex-col'>
            {/* LINKEDIN */}
            <Link to={'https://www.linkedin.com/in/jgwebdev38/'}><svg className="h-[2.1rem] mr-2 w-auto hover:text-blue-600 cursor-pointer hover:animate-bounce" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
            </svg></Link>

            {/* GITHUB */}
            <Link to={'https://github.com/jgrahamwebdev'}><svg className="h-[2.5rem] w-auto hover:text-blue-600 cursor-pointer hover:animate-bounce" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg></Link>
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
                    <div className='flex items-center justify-end w-[19.5rem]'>
                      <Link to={'/'}><img className='w-[6rem] h-auto cursor-pointer hover:bg-blue-300' src="/img/logo.png" alt="" /></Link>
                    </div>
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

export default Sidebar
