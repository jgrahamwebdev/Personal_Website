
import { Link } from "react-router-dom"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Recommendations from "./Recommendations"
import { useEffect } from "react";

const HeaderBar = () => {
 // Makes window start at top when navigating
 useEffect (() => {  
    window.scrollTo(0, 0)
}, []);

    return (
        <div className="flex flex-col">
            <div className="md:w-[calc(100vw-6rem)] w-screen h-[5.5rem] bg-[#e8e8e7] flex items-center justify-between pl-8 border-b-2 border-black fixed z-[1]">
                <img className="w-auto h-[3rem] md:h-[4rem] ml-[4.8rem] md:ml-0 cursor-pointer" src="/img/logo.png" alt="" />
                <Link to={'/contact'}><div className="h-[5.4rem] flex items-center justify-center"><button className="w-[7rem] h-[4rem] mr-2 md:mr-0 md:w-[12rem] md:h-full bg-blue-600 text-white text-[1.2rem] font-extralight hover:animate-pulse">Contact</button></div></Link>
            </div>
            <Hero />
            <Portfolio />
            <Recommendations />
            <Contact />
            <Footer />
        </div>

    )
}

export default HeaderBar
