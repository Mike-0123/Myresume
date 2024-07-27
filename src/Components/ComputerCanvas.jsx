/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import PropTypes from 'prop-types';

import CanvasLoader from '../Components/Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  // Use helper to debug the spotlight
  const spotLightRef = useRef();

  // Use helper to debug the spotlight
  useHelper(spotLightRef, THREE.SpotLightHelper, 'teal');

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <SpotLight
        // ref={spotLightRef}
        position={[-20, 50, 10]}
        angle={0.13}
        penumbra={1}
        intensity={5}
        distance={0}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [0, -2, -1.5] : [0, -3.5, 1]}
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  );
};

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // New state to track loading completion

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleLoadComplete = () => {
    setIsLoaded(true); // Call this once all resources are loaded
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={handleLoadComplete} // Assuming the Canvas triggers this once it's ready
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
