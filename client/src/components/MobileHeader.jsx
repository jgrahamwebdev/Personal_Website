import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu"

const MobileHeader = () => {
    return (
        <div className='fixed top-0 left-0 md:hidden w-screen h-[6rem] bg-[#e8e8e7] border-b-2 border-black flex items-center justify-center z-10'>
        <div className='h-full flex-1 flex items-center justify-start'>
          <MobileMenu />
        </div>
        <div className='h-full flex-1 flex items-center justify-end'>
          <Link to={'/'}><img className="w-auto h-[3rem] cursor-pointer mr-4" src="/img/logo.png" alt="" /></Link>
        </div>
      </div>
    )
}

export default MobileHeader
