
import { useEffect } from "react";
import MobileHeader from "../components/MobileHeader"
import Sidebar from "../components/Sidebar"
import { Fade } from "react-awesome-reveal";

export const products = [
    {
      id: 1,
      img: '/p-imgs/site-one.png',
      one: 'MERN',
      two: 'Tailwind CSS',
    },
    {
      id: 2,
      img: '/p-imgs/site-two.jpg',
      one: 'React',
      two: 'Tailwind CSS',
    },
    {
      id: 3,
      img: '/p-imgs/site-three.png',
      one: 'React',
      two: 'Styled Components',
    },
    {
      id: 4,
      img: '/p-imgs/site-four.png',
      one: 'MERN',
      two: 'Tailwind CSS',
    },
  ]

const PortfolioScreen = () => {

    // Makes window start at top when navigating
    useEffect (() => {  
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='w-screen h-full bg-white flex items-center flex-col justify-center'>
            <div className='hidden w-screen md:flex'>
                <Sidebar />
            </div>

            <MobileHeader />

            <div className="flex items-center md:items-start justify-center flex-col pt-8 mb-8 bg-white">
                <Fade cascade>
                    <h1 className="font-extrabold text-[3.5rem] mb-4">Portfolio</h1>
                    <p className="w-3/4 mb-8 ml-[4rem] md:ml-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi perferendis doloribus fugit quam totam veniam quis hic provident officia.</p>
                </Fade>
            </div>
            
            <div className="w-full h-auto flex items-center justify-start flex-col pl-[6rem]">
                {products.map((product) => (
                   <div className="w-full flex items-center justify-center mb-8" key={product.id}>
                    <div className="flex-[1] flex items-start justify-center w-full h-[40vh] overflow-hidden cursor-pointer px-4 border-r-2 border-black">                       
                        <img className="w-full hover:translate-y-[-100%] duration-[10s]" src={product.img} alt="" />
                    </div>
                    <div className="flex-[1] px-4">
                        <h1 className="text-[2rem] mb-4">Lorem, ipsum dolor.</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui laborum praesentium libero nemo numquam neque exercitationem magni tenetur quo, accusantium sint recusandae. Nobis dolorum repellat aspernatur id sit culpa est quod voluptatum harum, soluta architecto, ullam molestiae saepe quo. Deserunt minus sint fuga modi laudantium voluptatem, nemo deleniti?</p>
                        <div className='flex items-center justify-around w-full md:w-1/2'>
                            <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                                <h5 className='text-[1.1rem] px-4 py-1'>{product.one}</h5>
                            </div>

                            <div className="border-2 border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white cursor-pointer">
                                <h5 className='text-[1.1rem] px-4 py-1'>{product.two}</h5>
                            </div>   
                        </div>
                    </div>
                   </div>
                          
                ))}
            </div>
            <div className="w-screen h-[8rem] bg-white flex items-center justify-center md:pl-8 border-t-2 border-black">
            <h1 className="font-light">Copyright <span className="text-blue-600 text-[1.2rem]">&copy;</span> 2023 JG WebDev</h1>
        </div>
        </div>
    )
}

export default PortfolioScreen
