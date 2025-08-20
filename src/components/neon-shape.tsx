import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { LineSegmentsGeometry } from "three-stdlib";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";

interface NeonWireframeShapeProps {
  speed?: number;
  shape?: "pyramid" | "cube";
  colors?: string[];
  glowIntensity?: number;
  borderThickness?: number;
  width?: number;
  height?: number;
}

export const NeonWireframeShape = ({
  speed = 1,
  shape = "cube",
  colors = ["#f00", "#0f0", "#00f"],
  glowIntensity = 0.5,
  borderThickness = 2,
  width = 500,
  height = 500,
}: NeonWireframeShapeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);

  const geometry = useMemo(() => {
    if (shape === "pyramid") {
      return new THREE.ConeGeometry(1.5, 2.5, 4);
    } else {
      return new THREE.BoxGeometry(2, 2, 2);
    }
  }, [shape]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);

    const edges = new THREE.EdgesGeometry(geometry);

    const positions = Array.from(edges.attributes.position.array as Iterable<number>);
    const lineGeometry = new LineSegmentsGeometry();
    lineGeometry.setPositions(positions);

    const edgeMaterial = new LineMaterial({
      color: new THREE.Color(colors[0]),
      linewidth: borderThickness,
      resolution: new THREE.Vector2(width, height),
      transparent: true,
      opacity: 1.0,
    });

    const edgesMesh = new LineSegments2(lineGeometry, edgeMaterial);
    scene.add(edgesMesh);

    let colorIndex = 0;
    let colorProgress = 0;

    const animate = () => {
      const time = Date.now() * 0.001;

      edgesMesh.rotation.x = time * speed * 0.5;
      edgesMesh.rotation.y = time * speed * 0.7;

      colorProgress += speed * 0.01;
      if (colorProgress >= 1) {
        colorProgress = 0;
        colorIndex = (colorIndex + 1) % colors.length;
      }

      const currentColor = new THREE.Color(colors[colorIndex]);
      const nextColor = new THREE.Color(colors[(colorIndex + 1) % colors.length]);
      const interpolatedColor = currentColor.clone().lerp(nextColor, colorProgress);

      edgeMaterial.color = interpolatedColor;

      canvas.style.filter = `drop-shadow(0 0 ${10 * glowIntensity}px ${interpolatedColor.getStyle()})
                             drop-shadow(0 0 ${20 * glowIntensity}px ${interpolatedColor.getStyle()})`;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current!);
      renderer.dispose();
      geometry.dispose();
      edges.dispose();
      edgeMaterial.dispose();
      lineGeometry.dispose();
    };
  }, [geometry, speed, colors, glowIntensity, borderThickness]);

  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
};
