import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";

const NeonWireframeShape = ({
  speed = 1,
  shape = "cube",
  colors = ["#f00", "#0f0", "#00f"],
  glowIntensity = 0.5,
  borderThickness = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);

  const geometry = useMemo(() => {
    if (shape === "pyramid") {
      return new THREE.ConeGeometry(1, 1.5, 4);
    } else if (shape === "icosahedron") {
      return new THREE.IcosahedronGeometry(1, 0);
    } else {
      return new THREE.BoxGeometry(1.5, 1.5, 1.5);
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
    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(2, 2, 2);
    camera.lookAt(0, 0, 0);

    const edges = new THREE.EdgesGeometry(geometry);

    const positions: number[] = [];
    const posAttr = edges.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      positions.push(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i));
    }
    const lineGeometry = new LineGeometry();
    lineGeometry.setPositions(positions);

    const edgeMaterial = new LineMaterial({
      color: new THREE.Color(colors[0]),
      linewidth: borderThickness,
      resolution: new THREE.Vector2(200, 200),
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
      <canvas ref={canvasRef} width={200} height={200} />
    </div>
  );
};

// Exemple d'utilisation avec différentes configurations et arrière-plan
const AppNeon = () => {
  return (
    <div
      style={{
        padding: "20px",
        background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        position: "relative",
      }}
    >
      {/* Formes 3D avec fond transparent */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <NeonWireframeShape
          speed={1}
          shape="cube"
          colors={["#ff0066", "#00ff66", "#6600ff"]}
          glowIntensity={0.8}
          borderThickness={5}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <NeonWireframeShape
          speed={0.5}
          shape="pyramid"
          colors={["#ff6600", "#ffff00", "#00ffff"]}
          glowIntensity={1.2}
          borderThickness={1}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <NeonWireframeShape
          speed={1.2}
          shape="icosahedron"
          colors={["#00ffff", "#ff00ff", "#ffff00"]}
          glowIntensity={1.0}
          borderThickness={2}
        />
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        <NeonWireframeShape
          speed={2}
          shape="cube"
          colors={["#ff0000", "#ffffff", "#0000ff"]}
          glowIntensity={0.6}
          borderThickness={2}
        />
      </div>
    </div>
  );
};

export default AppNeon;
