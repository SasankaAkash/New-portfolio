import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import portfolioImg from '../../assets/portfolio.png';

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width  = mount.clientWidth;
    const height = mount.clientHeight;

    // ── Scene / Camera / Renderer ───────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent background
    mount.appendChild(renderer.domElement);

    // ── Texture ─────────────────────────────────────────────────
    const loader  = new THREE.TextureLoader();
    const geometry = new THREE.PlaneGeometry(2, 2, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    loader.load(portfolioImg, (tex) => {
      material.map = tex;
      material.needsUpdate = true;
      // Scale plane to match image aspect ratio
      const aspect = tex.image.width / tex.image.height;
      mesh.scale.set(aspect * 2, 2, 1);
    });

    // ── Mouse Tracking ───────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      // Normalise relative to the mount element, not window
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width  - 0.5) * 2;
      mouseY = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    };

    // Reset on mouse leave so image re-centres smoothly
    const onMouseLeave = () => { mouseX = 0; mouseY = 0; };

    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('mouseleave', onMouseLeave);

    // ── Animation Loop ───────────────────────────────────────────
    let animId;

    function animate() {
      animId = requestAnimationFrame(animate);

      // Silk-smooth interpolation (lerp factor 0.05)
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Subtle camera pan & tilt following mouse
      camera.position.x = targetX * 0.2;
      camera.position.y = -targetY * 0.2;
      camera.lookAt(scene.position);

      // Subtle breathing / zoom effect
      const time = performance.now() * 0.0005;
      mesh.scale.x += Math.sin(time) * 0.0001;
      mesh.scale.y += Math.sin(time) * 0.0001;

      renderer.render(scene, camera);
    }
    animate();

    // ── Resize Handler ───────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // ── Cleanup ──────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      mount.removeEventListener('mousemove', onMouseMove);
      mount.removeEventListener('mouseleave', onMouseLeave);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (material.map) material.map.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', cursor: 'none' }}
      aria-label="Interactive portfolio photo"
    />
  );
}
