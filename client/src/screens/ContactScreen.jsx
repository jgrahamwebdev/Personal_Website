
import { Link } from "react-router-dom"
import MobileHeader from "../components/MobileHeader"
import Sidebar from "../components/Sidebar"

const ContactScreen = () => {
    return (
        <div className="w-screen h-screen bg-white">
            <div className='hidden w-screen md:flex'>
                <Sidebar />
            </div>

            <MobileHeader />

            <div className="bg-blue-600 w-screen h-[85%] flex items-center justify-center flex-col md:pl-8 border-b-2 border-black mt-[4rem] md:mt-0">
            <h1 className="font-extrabold text-[2.8rem] md:text-[3rem] mb-4 text-white text-center">Let's chat & <br /> make something awesome!</h1>
            <p className="w-3/4 md:w-[30%] text-white text-center md:text-left mb-8">Feel free to send me a message with any questions or ideas you may have and I will get back to you ASAP</p>

            <Link to={'/message'}>
            <button className="border-2 border-black bg-white py-2 px-4 font-extralight hover:text-white hover:border-white hover:bg-blue-600 text-black hover:text-normal after:content-['🚀'] hover:after:content-['😄'] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">Message Me </button></Link>
            </div>

            <div className="w-screen h-[8rem] bg-white flex items-center justify-center md:pl-8">
            <h1 className="font-light">Copyright <span className="text-blue-600 text-[1.2rem]">&copy;</span> 2023 JG WebDev</h1>
        </div>
        </div>
    )
}

export default ContactScreen
