import { useGLTF } from "@react-three/drei";
import React from "react";
import { staticFile } from "remotion";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    PUSHILIN_Plane_Circle000: THREE.Mesh;
    PUSHILIN_Plane_Helix: THREE.Mesh;
  };
  materials: {
    plane: THREE.MeshStandardMaterial;
  };
};

const model = staticFile("/models/cloud/model.glb");

export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF(model) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          {...materials["lambert2SG.001"]}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(model);