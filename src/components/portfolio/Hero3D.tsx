import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, Torus, MeshDistortMaterial, Stars } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.3, 6]} />
      <MeshDistortMaterial
        color="#6c8cff"
        distort={0.45}
        speed={2}
        roughness={0.15}
        metalness={0.7}
        emissive="#3b2a8c"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={2}>
        <Torus args={[0.4, 0.13, 20, 48]} position={[-2.6, 1.4, -1]}>
          <meshStandardMaterial color="#c084fc" metalness={0.8} roughness={0.2} emissive="#7c3aed" emissiveIntensity={0.4} />
        </Torus>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2.4}>
        <Icosahedron args={[0.35, 0]} position={[2.6, -1.2, -0.5]}>
          <meshStandardMaterial color="#22d3ee" metalness={0.85} roughness={0.15} emissive="#0891b2" emissiveIntensity={0.5} />
        </Icosahedron>
      </Float>
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[2.2, 1.6, -1.5]}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#a5b4fc" metalness={0.9} roughness={0.1} emissive="#4338ca" emissiveIntensity={0.35} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2.3, -1.4, -1]}>
          <tetrahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#f0abfc" metalness={0.7} roughness={0.2} emissive="#a21caf" emissiveIntensity={0.35} />
        </mesh>
      </Float>
    </>
  );
}

/** Group that follows the mouse for a subtle 3D parallax feel. */
function MouseReactiveGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  const { viewport } = useThree();
  useFrame((state) => {
    if (!group.current) return;
    // Normalized pointer coords are -1..1
    const px = state.pointer.x;
    const py = state.pointer.y;
    const targetY = px * 0.5;
    const targetX = -py * 0.35;
    // Smooth lerp
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    group.current.position.x += (px * 0.25 * viewport.width * 0.02 - group.current.position.x) * 0.05;
  });
  return <group ref={group}>{children}</group>;
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#6c8cff" />
        <pointLight position={[-5, -3, 2]} intensity={0.9} color="#c084fc" />
        <pointLight position={[0, 3, -3]} intensity={0.7} color="#22d3ee" />
        <Stars radius={40} depth={60} count={1200} factor={3} saturation={0.5} fade speed={0.5} />
        <MouseReactiveGroup>
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
            <Blob />
          </Float>
          <FloatingShapes />
        </MouseReactiveGroup>
      </Suspense>
    </Canvas>
  );
}
