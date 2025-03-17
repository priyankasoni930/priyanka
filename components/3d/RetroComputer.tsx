import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Group, Mesh } from "three";
import { gsap } from "gsap";

interface RetroComputerProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  section: string;
}

const RetroComputer = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  section,
}: RetroComputerProps) => {
  const computerRef = useRef<Group>(null);
  const screenRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Placeholder for a real 3D model - in a real project, you'd use useGLTF to load a model
  // const { nodes, materials } = useGLTF('/models/retro_computer.glb');

  useFrame((state) => {
    if (computerRef.current) {
      // Add subtle floating animation
      computerRef.current.position.y =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;

      // Rotate slightly based on mouse position
      const mouseX = state.mouse.x * 0.1;
      const mouseY = state.mouse.y * 0.1;

      gsap.to(computerRef.current.rotation, {
        x: rotation[0] - mouseY,
        y: rotation[1] + mouseX,
        duration: 1,
        ease: "power2.out",
      });
    }

    // Screen glow effect when hovered
    if (screenRef.current) {
      if (hovered) {
        gsap.to(screenRef.current.material, {
          emissiveIntensity: 2,
          duration: 0.5,
        });
      } else {
        gsap.to(screenRef.current.material, {
          emissiveIntensity: 0.5,
          duration: 0.5,
        });
      }
    }
  });

  return (
    <group
      ref={computerRef}
      position={position}
      rotation={rotation}
      scale={[scale, scale, scale]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Computer base */}
      <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color="#3a3a3a" />
      </mesh>

      {/* Computer body */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.5, 1]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Screen */}
      <mesh ref={screenRef} castShadow receiveShadow position={[0, 0.6, 0.51]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#000033"
          emissive="#0033ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Screen content based on section */}
      <Text
        position={[0, 0.6, 0.52]}
        fontSize={0.1}
        color="#00ff00"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.4}
      >
        {section === "intro" && "HELLO WORLD\nI'M A FULL STACK\nDEVELOPER"}
        {section === "skills" &&
          "SKILLS LOADING...\nREACT.JS [████████]\nNODE.JS [████████]\nTHREE.JS [████████]"}
        {section === "projects" &&
          "PROJECTS:\n> AWESOME APP\n> COOL WEBSITE\n> 3D PORTFOLIO"}
        {section === "experience" &&
          "EXPERIENCE:\n> SENIOR DEV @ TECH CO\n> LEAD DEV @ STARTUP\n> FREELANCER"}
      </Text>

      {/* Keyboard */}
      <mesh castShadow receiveShadow position={[0, -0.1, 0.75]}>
        <boxGeometry args={[1.8, 0.1, 0.6]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Decorative elements */}
      <mesh castShadow receiveShadow position={[-0.8, 0.6, 0.51]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default RetroComputer;
