import React, { useRef } from 'react';
import { SpotLight, useGLTF, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import PropTypes from 'prop-types';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const spotLightRef = useRef();

  useHelper(spotLightRef, THREE.SpotLightHelper, 'teal');

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <SpotLight
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

export default Computers;
