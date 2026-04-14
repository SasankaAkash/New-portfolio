import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, RoundedBox } from '@react-three/drei';

/* ── Desktop / Laptop Model ─────────────────────────────────── */
function DesktopMesh() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.5} ref={groupRef}>
      <group>
        {/* Laptop base */}
        <mesh castShadow position={[0, -0.12, 0.2]}>
          <boxGeometry args={[2.8, 0.12, 2]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Laptop lid (screen) */}
        <mesh castShadow position={[0, 0.75, -0.78]} rotation={[-Math.PI / 6, 0, 0]}>
          <boxGeometry args={[2.8, 1.75, 0.09]} />
          <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.6} />
        </mesh>

        {/* Screen surface */}
        <mesh position={[0, 0.77, -0.76]} rotation={[-Math.PI / 6, 0, 0]}>
          <planeGeometry args={[2.55, 1.55]} />
          <meshStandardMaterial
            color="#4f8eff"
            emissive="#4f8eff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Keyboard area */}
        <mesh position={[0, -0.05, 0.15]}>
          <planeGeometry args={[2.4, 1.5]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, -0.06, 0.85]}>
          <planeGeometry args={[0.8, 0.55]} />
          <meshStandardMaterial color="#1e3a5f" roughness={0.2} />
        </mesh>

        {/* Floating orbs */}
        {[
          { pos: [-1.8, 0.3, 0.5], color: '#4f8eff', r: 0.12 },
          { pos: [1.8, 0.5, -0.2], color: '#a855f7', r: 0.1 },
          { pos: [0, 1.6, -1.2],   color: '#22d3ee', r: 0.08 },
        ].map((orb, i) => (
          <Float key={i} speed={2 + i} floatIntensity={0.6}>
            <mesh position={orb.pos}>
              <sphereGeometry args={[orb.r, 16, 16]} />
              <meshStandardMaterial
                color={orb.color}
                emissive={orb.color}
                emissiveIntensity={0.8}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </Float>
  );
}

/* ── Main Canvas Export ─────────────────────────────────────── */
export default function DesktopCanvas() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 6, 4]} intensity={1.5} />
        <pointLight position={[0, 1, 1]} intensity={2} color="#4f8eff" />
        <pointLight position={[-2, 2, 0]} intensity={1} color="#a855f7" />

        <DesktopMesh />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
