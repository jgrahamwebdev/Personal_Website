
import MobileHeader from "../components/MobileHeader"
import Sidebar from "../components/Sidebar"
import { Fade } from "react-awesome-reveal";

const PortfolioScreen = () => {
    return (
        <div className='w-screen h-full bg-white flex items-center flex-col justify-center'>
            <div className='hidden w-screen md:flex'>
                <Sidebar />
            </div>

            <MobileHeader />

            <div className="flex items-center md:items-start justify-center flex-col md:pl-[5.22rem] pt-8 mb-8 bg-white">
                <Fade cascade>
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Portfolio</h1>
                    <p className="w-3/4 mb-8 ml-[4rem] md:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>
                </Fade>
            </div>
            
            <div className="w-full flex items-center justify-start pl-[6rem] border-2 mb-4">
                Project One
            </div>
            <div className="w-full flex items-center justify-end border-2 mb-4">
                Project Two
            </div>
            <div className="w-full flex items-center justify-start pl-[6rem] border-2 mb-4">
                Project Three
            </div>
            <div className="w-full flex items-center justify-end border-2 mb-4">
                Project Four
            </div>
            <div className="w-screen h-[8rem] bg-white flex items-center justify-center md:pl-8 border-t-2 border-black">
            <h1 className="font-light">Copyright <span className="text-blue-600 text-[1.2rem]">&copy;</span> 2023 JG WebDev</h1>
        </div>
        </div>
    )
}

export default PortfolioScreen
