import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid, Plane, GradientTexture } from "@react-three/drei";
import { Group } from "three";

interface RetroGridProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  cellSize?: number;
  cellThickness?: number;
  cellColor?: string;
  sectionColor?: string;
  fadeDistance?: number;
  fadeStrength?: number;
  infiniteGrid?: boolean;
}

const RetroGrid = ({
  position = [0, -2, 0],
  rotation = [-Math.PI / 2, 0, 0],
  cellSize = 0.6,
  cellThickness = 0.6,
  cellColor = "#2dd4bf",
  sectionColor = "#0ea5e9",
  fadeDistance = 30,
  fadeStrength = 1.5,
  infiniteGrid = true,
}: RetroGridProps) => {
  const gridRef = useRef<Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Make the grid move to create a motion effect
      gridRef.current.position.z =
        (state.clock.getElapsedTime() * 0.3) % cellSize;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Modern gradient background */}
      <Plane
        args={[100, 50]}
        position={[0, -0.1, -25]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial attach="material" side={2}>
          <GradientTexture
            attach="map"
            stops={[0, 0.2, 0.4, 0.6, 1]}
            colors={["#0f172a", "#1e293b", "#334155", "#1e293b", "#0f172a"]}
          />
        </meshBasicMaterial>
      </Plane>

      {/* Retro grid */}
      <group ref={gridRef} position={[0, 0, 0]}>
        <Grid
          args={[100, 100]}
          cellSize={cellSize}
          cellThickness={cellThickness}
          cellColor={cellColor}
          sectionSize={3}
          sectionThickness={1}
          sectionColor={sectionColor}
          fadeDistance={fadeDistance}
          fadeStrength={fadeStrength}
          infiniteGrid={infiniteGrid}
        />
      </group>
    </group>
  );
};

export default RetroGrid;
