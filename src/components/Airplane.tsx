import {useEffect} from 'react'
import {useCurrentFrame} from 'remotion'
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { staticFile } from "remotion";
import { Mesh } from "three";
import { GLTF } from "three-stdlib";

const HELIX_SPEED = 6;

type GLTFResult = GLTF & {
  nodes: {
    PUSHILIN_Plane_Circle000: THREE.Mesh;
    PUSHILIN_Plane_Helix: THREE.Mesh;
  };
  materials: {
    plane: THREE.MeshStandardMaterial;
  };
};

const model = staticFile("/models/airplane/model.glb");

export function Airplane(props) {
  const { advance } = useThree();
  const frame = useCurrentFrame();

  useEffect(() => {
    if (helix.current) {
      helix.current.rotation.x += HELIX_SPEED;
    }
  
		advance(frame);
	},[frame]);
  
  const { nodes, materials } = useGLTF(model) as GLTFResult;

  const helix = useRef<Mesh>(null!);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
        material={materials.plane}
      />
      <mesh
        ref={helix}
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      />
    </group>
  );

}

useGLTF.preload(model);