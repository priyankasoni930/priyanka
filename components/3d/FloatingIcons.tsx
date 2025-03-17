import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Group, Vector3 } from "three";

interface FloatingIconsProps {
  count?: number;
  radius?: number;
}

interface IconData {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  rotationSpeed: number;
  iconType: string;
}

const FloatingIcons = ({ count = 20, radius = 10 }: FloatingIconsProps) => {
  const group = useRef<Group>(null);

  // Generate random positions for the icons
  const icons = useMemo<IconData[]>(() => {
    const temp: IconData[] = [];
    const iconTypes = [
      "react",
      "node",
      "js",
      "ts",
      "html",
      "css",
      "three",
      "next",
      "mongo",
      "aws",
    ];

    for (let i = 0; i < count; i++) {
      const position: [number, number, number] = [
        Math.random() * radius * 2 - radius,
        Math.random() * radius * 2 - radius,
        Math.random() * radius * 2 - radius,
      ];

      const rotation: [number, number, number] = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ];

      const scale = Math.random() * 0.5 + 0.5;

      const speed = Math.random() * 0.5 + 0.5;
      const rotationSpeed = Math.random() * 0.5 + 0.5;

      const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];

      temp.push({
        position,
        rotation,
        scale,
        speed,
        rotationSpeed,
        iconType,
      });
    }
    return temp;
  }, [count, radius]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;

      // Update each icon
      group.current.children.forEach((child, i) => {
        const icon = icons[i];

        // Floating animation
        child.position.y +=
          Math.sin(state.clock.getElapsedTime() * icon.speed) * 0.005;

        // Rotation animation
        child.rotation.x += 0.002 * icon.rotationSpeed;
        child.rotation.y += 0.003 * icon.rotationSpeed;
        child.rotation.z += 0.001 * icon.rotationSpeed;
      });
    }
  });

  const renderIcon = (
    type: string,
    position: [number, number, number],
    rotation: [number, number, number],
    scale: number
  ) => {
    const color =
      type === "react"
        ? "#61DAFB"
        : type === "node"
        ? "#68A063"
        : type === "js"
        ? "#F7DF1E"
        : type === "ts"
        ? "#3178C6"
        : type === "html"
        ? "#E34F26"
        : type === "css"
        ? "#1572B6"
        : type === "three"
        ? "#049EF4"
        : type === "next"
        ? "#FFFFFF"
        : type === "mongo"
        ? "#4DB33D"
        : "#FF9900"; // aws

    switch (type) {
      case "react":
        return (
          <group position={position} rotation={rotation} scale={scale}>
            <Torus args={[0.7, 0.2, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
              />
            </Torus>
            <Sphere args={[0.3, 16, 16]} position={[0, 0, 0]}>
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
              />
            </Sphere>
          </group>
        );
      case "node":
      case "js":
      case "ts":
        return (
          <group position={position} rotation={rotation} scale={scale}>
            <Box args={[1, 1, 0.2]}>
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
              />
            </Box>
            <Text
              position={[0, 0, 0.15]}
              fontSize={0.5}
              color="#000000"
              anchorX="center"
              anchorY="middle"
            >
              {type.toUpperCase()}
            </Text>
          </group>
        );
      case "html":
      case "css":
        return (
          <group position={position} rotation={rotation} scale={scale}>
            <Box args={[1, 1.2, 0.2]}>
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.5}
              />
            </Box>
            <Text
              position={[0, 0, 0.15]}
              fontSize={0.4}
              color="#FFFFFF"
              anchorX="center"
              anchorY="middle"
            >
              {type.toUpperCase()}
            </Text>
          </group>
        );
      case "three":
      case "next":
      case "mongo":
      case "aws":
      default:
        return (
          <Icosahedron
            position={position}
            rotation={rotation}
            scale={scale}
            args={[0.6, 1]}
          >
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.5}
              wireframe
            />
          </Icosahedron>
        );
    }
  };

  return (
    <group ref={group}>
      {icons.map((icon, i) => (
        <group key={i}>
          {renderIcon(icon.iconType, icon.position, icon.rotation, icon.scale)}
        </group>
      ))}
    </group>
  );
};

export default FloatingIcons;
