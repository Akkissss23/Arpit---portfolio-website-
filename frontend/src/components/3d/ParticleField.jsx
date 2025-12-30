import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Lightweight Three.js particle field (no react-three-fiber)
// Safe for CRA + React 18, cleans up WebGL resources on unmount
const ParticleField = ({
  count = 2000,
  color = '#ff84e4',
  size = 0.02,
  rotateX = 0.03,
  rotateY = 0.06,
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(0);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const pointsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Particles geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribute in a cube around origin
      positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color,
      size,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    pointsRef.current = points;
    scene.add(points);

    const onResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener('resize', onResize);

    const tick = () => {
      if (points) {
        points.rotation.x += rotateX * 0.01;
        points.rotation.y += rotateY * 0.01;
      }
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onResize);
      // Dispose resources
      geometry.dispose();
      material.dispose();
      scene.remove(points);
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [count, color, size, rotateX, rotateY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleField;
