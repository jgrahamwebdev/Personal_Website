
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import HeroMenu from "./HeroMenu";



const Hero = () => {

    const [currentColor, setCurrentColor] = useState('#2563EB'); 
  
   const handleColorChange = (event, color) => { 
     event.preventDefault(); 
     setCurrentColor(color); 
   } 
    
    function Box(props) {
        const mesh = useRef();
        useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
        return (
           <mesh {...props} ref={mesh}>
              <boxGeometry args={[3, 3, 3]} />
              <meshStandardMaterial color={currentColor}  roughness={0.4} metalness={0.7}/>
           </mesh>
        );
     }
    return (
        <div className="w-full h-[42rem] border-b-2 border-black flex mt-16">

            <div className="w-1/2 h-full border-r-2 border-black flex items-start justify-center flex-col pl-9">
               <h1 className="font-extrabold text-[3.5rem] mb-4">
                Full Stack Developer <br /> & Designer
               </h1>
               <p className="w-3/4 mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci excepturi odit eum, ipsa debitis corporis voluptatem dolores sequi tempora. Eius at ex dolore facere! Quaerat, repellat? Magni aspernatur, ea id enim quia quas iure, reprehenderit, pariatur porro esse ducimus eum!</p>
               <button className="border-2 border-blue-600 py-2 px-4 font-extralight hover:bg-blue-600 hover:text-white hover:text-normal hover:animate-pulse transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110">
                More About Me &rarr;
               </button>
            </div>

            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="w-full h-[73%] flex items-center justify-center flex-col z-[-1]">
                    <Canvas>
                        <ambientLight intensity={1} /> 
                        <spotLight position={[10, 20, 10]} angle={0.25} penumbra={1} /> 
                        <pointLight position={[-10, -10, -10]} /> 
                        <Box position={[0, 0, 0]} />
                    </Canvas>
                </div>
                <HeroMenu handleColorChange={handleColorChange}/>
            </div>
        </div>
    )
}

export default Hero
