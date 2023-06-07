
import { EnvelopeIcon, UserIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const ContactForm = () => {

    let gray = '#bdc3c7';
    const [bgColor, setBgColor] = useState(gray);
    const changeColor = () => {
        let blue = 'rgb(59 130 246)';
        setBgColor(blue);
    }

    const [effect, setEffect] = useState(false);

    return (
        <div className='w-screen h-full md:h-screen flex items-center justify-center bg-blue-600 pt-[8rem]'>

            <div className='fixed top-0 left-0 w-screen h-[6rem] bg-[#e8e8e7] border-b-2 border-black flex items-center justify-center z-10'>
                <div className='h-full flex-1 flex items-center justify-end'>
                <Link to={'/'}><img className="w-auto h-[3rem] cursor-pointer mr-4 hover:bg-blue-300" src="/img/logo.png" alt=""/></Link>
                </div>
            </div>


        <div className='w-full flex items-center justify-center flex-col'>

            <div className='w-3/4 md:w-[45rem] mb-8'>
                <label htmlFor="name" className="block text-white text-lg font-medium leading-6">Name</label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <UserIcon className="h-5 w-5" aria-hidden="true" style={{color: bgColor}}/>
                    </div>
                    <input type="name" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none focus:ring-transparent" placeholder="Your Name" onClick={changeColor}/>
                </div>
            </div>

            <div className='w-3/4 md:w-[45rem] mb-8'>
                <label htmlFor="email" className="block text-lg font-medium leading-6 text-white">Email</label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <EnvelopeIcon className="h-5 w-5" aria-hidden="true" style={{color: bgColor}}/>
                    </div>
                    <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none focus:ring-transparent" placeholder="email@example.com" onClick={changeColor}/>
                </div>
            </div>

            <div className='w-3/4 md:w-[45rem] mb-8'>
                <label htmlFor="message" className="block text-lg font-medium leading-6 text-white">Message</label>
                <div className="relative mt-2 rounded-md shadow-sm">                  
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='w-full pt-2 pl-2 outline-none focus:ring-transparent'></textarea>
                </div>
            </div>

            <button className={`border-2 border-black bg-white py-2 px-8 font-extralight text-black hover:text-normal transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:after:content-['📫'] after:content-['📪'] mb-[4rem] md:mb-0 ${
            effect && "animate-wiggle"
          } `} onClick={() => { setEffect(true); }}
          onAnimationEnd={() => setEffect(false)}>Submit </button>
            
        </div>
        </div>
    )
}

export default ContactForm
