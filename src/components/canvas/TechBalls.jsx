import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useMemo } from "react";

import CanvasLoader from "../Loader";

const LogoBall = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.7}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const TechBalls = ({ icon }) => {
  const memoizedIcon = useMemo(() => icon, [icon]);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <LogoBall imgUrl={memoizedIcon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechBalls;
