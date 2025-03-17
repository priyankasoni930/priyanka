import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Group } from "three";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  size?: number;
  color?: string;
  depth?: number;
}

const ParticleField = ({
  count = 1000,
  size = 0.02,
  color = "#88ccff",
  depth = 50,
}: ParticleFieldProps) => {
  const points = useRef<Group>(null);

  // Generate random positions for particles
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 25;
      temp[i3 + 1] = (Math.random() - 0.5) * 25;
      temp[i3 + 2] = (Math.random() - 0.5) * depth;
    }
    return temp;
  }, [count, depth]);

  // Generate random speeds for particles
  const speeds = useMemo(() => {
    const temp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      temp[i] = Math.random() * 0.01 + 0.002;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      // Rotate the entire particle field
      points.current.rotation.y = state.clock.getElapsedTime() * 0.02;

      // Update particle positions
      const positions = (points.current.children[0] as THREE.Points).geometry
        .attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Move particles along z-axis
        positions[i3 + 2] += speeds[i] * 2;

        // Reset particles that go too far
        if (positions[i3 + 2] > depth / 2) {
          positions[i3 + 2] = -depth / 2;
        }
      }

      (
        points.current.children[0] as THREE.Points
      ).geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={points}>
      <Points positions={particles} stride={3}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export default ParticleField;
