"use client";

import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "motion/react";
import * as THREE from "three";
import { WeddingRingsScene } from "@/components/wedding-rings/wedding-rings-scene";

export default function WeddingRingsBackground() {
  const { scrollYProgress } = useScroll();
  const layerOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [0.6, 0.6, 1]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ opacity: layerOpacity }}
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <Canvas
          dpr={[1, 1.5]}
          frameloop="always"
          camera={{ position: [0, 0, 8], fov: 35, near: 0.1, far: 40 }}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
            gl.toneMapping = THREE.AgXToneMapping;
            gl.toneMappingExposure = 1.12;
          }}
        >
          <WeddingRingsScene progress={scrollYProgress} />
        </Canvas>
      </motion.div>
      <span className="sr-only">
        Two old-gold wedding rings float behind the invitation and join near the closing dua.
      </span>
    </>
  );
}
