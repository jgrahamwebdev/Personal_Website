
import ModelCanvas from "./canvas/ModelCanvas";

const Hero = () => {

    return (
        <div className="w-full h-[42rem] border-b-2 border-black flex mt-16 flex-col md:flex-row">

            <div className="w-full md:w-1/2 h-full border-r-2 border-black flex items-center md:items-start justify-center flex-col pl-[5rem] md:pl-9">
               <h1 className="font-extrabold text-center text-[3rem] md:text-left md:text-[3.5rem] pl-[1rem] md:pl-0 mb-4">
                Full Stack Developer <br /> & Designer
               </h1>
               <p className="w-3/4 mb-8 text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci excepturi odit eum, ipsa debitis corporis voluptatem dolores sequi tempora. Eius at ex dolore facere! Quaerat, repellat? Magni aspernatur, ea id enim quia quas iure, reprehenderit, pariatur porro esse ducimus eum!</p>
               <button className="border-2 border-blue-600 py-2 px-4 font-extralight hover:bg-blue-600 hover:text-white hover:text-normal hover:animate-pulse transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
                More About Me &rarr;
               </button>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center w-1/2 h-full z-0">
                <div className="w-full h-[85%] flex items-center justify-center flex-col">
                    <ModelCanvas />
                </div>
            </div>
        </div>
    )
}

export default Hero
