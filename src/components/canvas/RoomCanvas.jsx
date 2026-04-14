import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/* ── Animated Room Mesh (geometric stand-in for a .glb model) ── */
function RoomMesh() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#0d0d2b" roughness={0.8} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 1, -3]}>
        <boxGeometry args={[6, 4, 0.1]} />
        <meshStandardMaterial color="#111132" roughness={0.6} />
      </mesh>

      {/* Desk body */}
      <mesh castShadow position={[0, -0.3, 0]}>
        <boxGeometry args={[3.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.2} />
      </mesh>
      {/* Desk legs */}
      {[[-1.6, -0.7], [1.6, -0.7], [-1.6, 0.6], [1.6, 0.6]].map(([x, z], i) => (
        <mesh key={i} castShadow position={[x, -0.7, z]}>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color="#1e293b" />
        </mesh>
      ))}

      {/* Monitor */}
      <Float speed={1.5} floatIntensity={0.3}>
        <mesh castShadow position={[0, 0.7, -0.4]}>
          <boxGeometry args={[2, 1.2, 0.08]} />
          <meshStandardMaterial color="#0f172a" emissive="#4f8eff" emissiveIntensity={0.15} />
        </mesh>
        {/* Screen glow */}
        <mesh position={[0, 0.7, -0.35]}>
          <planeGeometry args={[1.85, 1.08]} />
          <meshStandardMaterial
            color="#4f8eff"
            emissive="#4f8eff"
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Monitor stand */}
      <mesh position={[0, 0.07, -0.4]}>
        <cylinderGeometry args={[0.05, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#334155" metalness={0.5} />
      </mesh>

      {/* Keyboard */}
      <Float speed={2} floatIntensity={0.15}>
        <mesh castShadow position={[0, -0.22, 0.3]}>
          <boxGeometry args={[1.6, 0.05, 0.55]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.4} />
        </mesh>
      </Float>

      {/* Coffee cup */}
      <Float speed={3} floatIntensity={0.2}>
        <mesh castShadow position={[1.4, -0.2, 0]}>
          <cylinderGeometry args={[0.1, 0.08, 0.25, 16]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.3} />
        </mesh>
      </Float>

      {/* Floating code cubes */}
      {[
        { pos: [-2, 0.5, -1], color: '#4f8eff', size: 0.25 },
        { pos: [2.2, 0.8, -0.5], color: '#a855f7', size: 0.2 },
        { pos: [-1.8, 1.2, 0.5], color: '#22d3ee', size: 0.18 },
      ].map((cube, i) => (
        <Float key={i} speed={1 + i * 0.5} floatIntensity={0.4} rotationIntensity={0.3}>
          <mesh position={cube.pos}>
            <boxGeometry args={[cube.size, cube.size, cube.size]} />
            <meshStandardMaterial
              color={cube.color}
              emissive={cube.color}
              emissiveIntensity={0.5}
              transparent
              opacity={0.85}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

/* ── Particle Field ─────────────────────────────────────────── */
function ParticleField() {
  const pointsRef = useRef();
  const count = 3000;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#4f8eff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

/* ── Main Canvas Export ─────────────────────────────────────── */
export default function RoomCanvas() {
  return (
    <div className="canvas-wrapper" style={{ height: '100%', width: '100%' }}>
      <Canvas
        shadows
        camera={{ position: [4, 2, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[0, 0.7, -0.4]} intensity={2} color="#4f8eff" />
        <pointLight position={[-2, 1, 0]} intensity={0.8} color="#a855f7" />

        {/* Scene */}
        <RoomMesh />
        <ParticleField />
        <Stars radius={40} depth={30} count={1500} factor={2} saturation={0} fade speed={0.5} />

        {/* Controls — limited to subtle auto-rotate on hero */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}
