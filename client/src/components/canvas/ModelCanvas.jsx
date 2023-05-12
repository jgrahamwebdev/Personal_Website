
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Model = () => {
    const model = useGLTF("./model/scene.gltf");
  
    return (
      <mesh>
        <hemisphereLight intensity={0.28} groundColor='white' />
        <spotLight
          position={[-50, 150, 80]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1.5} />
        <primitive
          object={model.scene}
          scale={10}
          position={[5, -6.25, 0]}
          rotation={[0, 1.8, 0]}
        />
      </mesh>
    );
  };
  
const ModelCanvas = () => {
 
    return (
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [50, 3, -2], fov: 40 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            enableZoom={false}
            // maxPolarAngle={Math.PI / 2}
            // minPolarAngle={Math.PI / 2}
          />

          <Model />
        </Suspense>
 
        <Preload all />
      </Canvas>
    );
  };
  
  export default ModelCanvas;
  