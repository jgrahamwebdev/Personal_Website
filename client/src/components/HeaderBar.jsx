
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Portfolio from "./Portfolio"
import Recommendations from "./Recommendations"

const HeaderBar = () => {
    return (
        <div className="flex flex-col">
            <div className="md:w-[calc(100vw-6rem)] w-screen h-[6rem] bg-[#e8e8e7] flex items-center justify-between pl-8 border-b-2 border-black fixed z-[1]">
                <img className="w-auto h-[3rem] md:h-[4rem] ml-[4.8rem] md:ml-0 cursor-pointer" src="/img/logo.png" alt="" />
                <button className="w-[7rem] h-[4rem] mr-2 md:mr-0 md:w-[12rem] md:h-full bg-blue-600 text-white text-[1.2rem] font-extralight hover:animate-pulse">Contact</button>
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
