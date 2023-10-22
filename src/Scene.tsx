import {ThreeCanvas} from '@remotion/three';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import { Airplane } from './components/Airplane';
import { Float } from '@react-three/drei';
import { Background } from './components/Background';



export const Scene = () => {
	const { width, height} = useVideoConfig();

	return (
    <AbsoluteFill >
    <ThreeCanvas
      orthographic={false}
      width={width}
      height={height}
      frameloop='never'
      style={{
        backgroundColor: '#ececec',
      }}
      camera={{ fov: 30, position: [0, 0, 5] }}
    >
      <Background />
      <Float floatIntensity={2} speed={2}>
        <Airplane
          rotation-y={Math.PI / 2}
          scale={[0.2, 0.2, 0.2]}
          position-y={0.1}
        />
      </Float>
      
    </ThreeCanvas>

  </AbsoluteFill>
	);
};
