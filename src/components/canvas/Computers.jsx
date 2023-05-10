import React ,{Suspense, useEffect ,useState }from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader"
const Computers = () => {
  const computers=useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"}/>
      <pointLight intensity={1}  />
      <primitive object={computers.scene}/>
    </mesh>
  )
}
const ComputersCanvas=()=>{
  return(
    <Camvas frameLoop="demand" shadwos camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer:true}}>
<Suspense fallback={<CanvasLoader/>}>
  <OrbitControls
  maxPolarAngle={Math.PI/2}
  minPolarAngle={Math.PI/2}
   enableZoom={false} /><Computers/> 
</Suspense>     
<Preload all/>
    </Camvas>
  )
}

export default ComputersCanvas