import React, { Suspense } from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";

import { Html, useGLTF, OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/home2.glb", true);
  console.log(gltf);
  return <primitive object={gltf.scene} dispose={null} />;
};

function Landing() {
  return (
    <Canvas colorManagement camera={{ position: [0, 0, 8], fov: 20 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[0, 10, 0]}
          castShadow
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group></group>
        <mesh castShadow position={[-0.4, -1.2, 0]}>
          <Model />
        </mesh>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
          receiveShadow
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default Landing;
