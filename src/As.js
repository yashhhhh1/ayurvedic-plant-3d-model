import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ashwagandhaGLB from "./assets/test.glb";
export function As(props) {
  const { nodes, materials } = useGLTF(ashwagandhaGLB); // Adjust path if necessary

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload(ashwagandhaGLB); // Ensure the path is correct
