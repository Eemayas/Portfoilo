// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./computer.glb");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<></>}>
//         <OrbitControls
//         autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;















































// // import React, { Suspense, useEffect, useState } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { OrbitControls, Preload, PresentationControls, Stage, useGLTF } from "@react-three/drei";
// // import CanvasLoader from "../Loader";
// // import { useLoader } from "@react-three/fiber";
// // import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// // // const Computers = () => {
// // //   const gltf = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
// // //   const {scene} = useGLTF("./gaming_desktop_pc_blend_file.glb");
// // //   return (
// // //     object={computers}
// // //     <></>
// // //     <mesh>
// // //     <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
// // //       <hemisphereLight intensity={0.15} groundColor={"black"} />
// // //       <pointLight intensity={1} />
// // //       <primitive object={gltf.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.01,-0.2,-0.1]} />
// // //     </mesh>
// // //   );
// // // };
// // function Model(props)
// // {
// //   const {scene} = useGLTF("/public/gaming_desktop_pc_blend_file.glb");
// //   return <primitive object={scene} {...props} scale={0.75} position={[0, -2.25, -1.5]} rotation={[-0.01,-0.2,-0.1]} />

// // }
// // const ComputersCanvas = () => {
// //   const [isMobile,setIsMobile]=useState(false);
// //   useEffect(()=>{
// // const mediaQuery = window.matchMedia('(max-width:500px)');
// // setIsMobile(mediaQuery.matches );
// // const handleMediaQueryChange=(events) => {
// //   setIsMobile(events.mediaQuery);
// // }  
// // mediaQuery.addEventListener("change",handleMediaQueryChange);
// // return ()=>{
// //   mediaQuery.removeEventListener("change",handleMediaQueryChange);
// // }
// // },[])
    
// //   return (
// //  <Canvas
// //       frameloop="demand"
// //       shadows
// //       camera={{ position: [20, 3, 5], fov: 25 }}
// //       gl={{ preserveDrawingBuffer: true }}
// //      >
// //       {/* <Suspense fallback={<CanvasLoader />}> */}
// //        <OrbitControls
// //          maxPolarAngle={Math.PI / 2}
// //          minPolarAngle={Math.PI / 2}
// //          enableZoom={false}
// //        />
// //         {/* <Stage environment={null}> */}
// //         <spotLight position={[-20,50,10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
// //     <Model/>
// //   {/* </Stage>  */}
// //      {/* </Suspense>  */}
// //       <Preload all /> 
// //     </Canvas> 
   
// //   );
// // };

// // export default ComputersCanvas;

    
    
    
// // //     <Canvas drp={[1,2]} shadows camera={{fov:45}} style={{"position":"absolute" }}>
// // //       {/* <color attach={"background"} args={["#101010"]}> */}
// // // {/* <PresentationControls speed={1.5} global zoom={.5} polar={[-.1,Math.PI/4]}> */}
// // //   <Stage environment={null}>
// // //     <Model/>
// // //   </Stage>
// // //  {/* </PresentationControls> */}
// // //       {/* </color> */}
// // //     </Canvas>