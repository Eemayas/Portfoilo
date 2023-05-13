import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Computers = () => {
  const gltf = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
  // // const computers = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
    <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <pointLight intensity={1} />
      <primitive object={gltf.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01,-0.2,-0.1]} />
    </mesh>
  );
};
// object={computers}
const ComputersCanvas = () => {
  const [isMobile,setIsMobile]=useState(fasle);
//   useEffect(()=>{
// const mediaQuery = window.matchMedia('(max-width:500px)');
// setIsMobile(mediaQuery.matches );
// const handleMediaQueryChange=(events) => {
//   setIsMobile(events.mediaQuery);
// }  
// mediaQuery.addEventListener("change",handleMediaQueryChange);
// return ()=>{
//   mediaQuery.removeEventListener("change",handleMediaQueryChange);
// }
// },[])
    
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
     >
     {/* <Suspense fallback={<CanvasLoader />}>
       <OrbitControls
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2}
         enableZoom={false}
       />
      <Computers /> 
     </Suspense> */}
      {/* <Preload all /> */}
    </Canvas>
  );
};

export default ComputersCanvas;
