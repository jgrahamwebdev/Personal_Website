import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Portfolio from "./Portfolio"

const HeaderBar = () => {
    return (
        <div className="flex flex-col">
            <div className="md:w-[calc(100vw-6rem)] w-screen h-[6rem] bg-white flex items-center justify-between pl-8 border-b-2 border-black fixed">
                <img className="w-auto h-[3rem] md:h-[4rem] ml-[4.8rem] md:ml-0 cursor-pointer" src="/img/logo.png" alt="" />
                <button className="w-[6rem] h-[4rem] mr-2 md:mr-0 md:w-[12rem] md:h-full bg-blue-600 text-white text-[1.2rem] font-extralight hover:animate-pulse">Contact</button>
            </div>
            <Hero />
            <Portfolio />

            <Contact />
            <Footer />
        </div>

    )
}

export default HeaderBar
