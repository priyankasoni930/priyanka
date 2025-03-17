import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { ReactNode } from "react";

interface CanvasProps {
  children: ReactNode;
}

const Canvas = ({ children }: CanvasProps) => {
  return (
    <ThreeCanvas
      shadows
      camera={{ position: [0, 0, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[1, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {children}
      <Preload all />
    </ThreeCanvas>
  );
};

export default Canvas;
