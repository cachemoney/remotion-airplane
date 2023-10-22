import { Float } from "@react-three/drei";
import { useRef } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { PerspectiveCamera } from '@react-three/drei';
import { Airplane } from "./Airplane";
import { Background } from "./Background";


export function CameraGroup(props) {
  const { width, height} = useVideoConfig();
	
  // Code below drops fps to ~10, when commented out
  // However moves fps back to 30.
  const frame = useCurrentFrame();
	
	
	const cameraGroup = useRef<THREE.Group>(null!);

  return (
    <group ref={cameraGroup}>
    <Background />
    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={30} />
    <Float floatIntensity={1.25} speed={.5}>
      <Airplane
        rotation-y={Math.PI / 2}
        scale={[0.2, 0.2, 0.2]}
        position-y={0.1}
      />
    </Float>
  </group>
  )
}