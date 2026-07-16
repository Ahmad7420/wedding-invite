"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import type { MotionValue } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { WeddingRing } from "@/components/wedding-rings/wedding-ring";

type WeddingRingsSceneProps = {
  progress: MotionValue<number>;
};

const quadraticBezier = (start: number, control: number, end: number, progress: number) => {
  const inverse = 1 - progress;
  return inverse * inverse * start + 2 * inverse * progress * control + progress * progress * end;
};

function ScrollInvalidator({ progress }: WeddingRingsSceneProps) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    invalidate();
    return progress.on("change", () => invalidate());
  }, [invalidate, progress]);

  return null;
}

export function WeddingRingsScene({ progress }: WeddingRingsSceneProps) {
  const leftRingRef = useRef<THREE.Group>(null);
  const rightRingRef = useRef<THREE.Group>(null);
  const meetingLightRef = useRef<THREE.PointLight>(null);
  const viewport = useThree((state) => state.viewport);

  const geometry = useMemo(() => new THREE.TorusGeometry(1, 0.18, 32, 96), []);
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#C3A05A",
        metalness: 1,
        roughness: 0.16,
        clearcoat: 0.55,
        clearcoatRoughness: 0.14,
        envMapIntensity: 0.95,
      }),
    []
  );

  useEffect(
    () => () => {
      geometry.dispose();
      material.dispose();
    },
    [geometry, material]
  );

  useFrame((state) => {
    const leftRing = leftRingRef.current;
    const rightRing = rightRingRef.current;

    if (!leftRing || !rightRing) {
      return;
    }

    const normalizedProgress = THREE.MathUtils.clamp(progress.get(), 0, 1);
    const flipProgress = THREE.MathUtils.smoothstep(normalizedProgress, 0.05, 0.78);
    const travelProgress = THREE.MathUtils.smoothstep(normalizedProgress, 0.02, 0.92);
    const joinProgress = THREE.MathUtils.smoothstep(normalizedProgress, 0.94, 1);
    const settleProgress = THREE.MathUtils.smoothstep(normalizedProgress, 0.98, 1);

    const scale = THREE.MathUtils.clamp(
      Math.min(viewport.width, viewport.height) * 0.067,
      0.268,
      0.366
    );
    const outerRadius = 1.18 * scale;
    const horizontalMargin = Math.max(0.16, viewport.width * 0.035);
    const verticalMargin = Math.max(0.2, viewport.height * 0.06);

    const leftStartX = -viewport.width / 2 + outerRadius + horizontalMargin;
    const rightStartX = viewport.width / 2 - outerRadius - horizontalMargin;
    const startY = viewport.height / 2 - outerRadius - verticalMargin;
    const finalY = -viewport.height / 2 + outerRadius + Math.max(0.32, viewport.height * 0.07);
    const approachY = finalY + Math.max(0.34, viewport.height * 0.08);
    const leftApproachX = -0.9 * scale;
    const rightApproachX = 0.9 * scale;
    const leftFinalX = -0.52 * scale;
    const rightFinalX = 0.52 * scale;

    const leftPathX = quadraticBezier(
      leftStartX,
      leftStartX * 0.72,
      leftApproachX,
      travelProgress
    );
    const rightPathX = quadraticBezier(
      rightStartX,
      rightStartX * 0.72,
      rightApproachX,
      travelProgress
    );
    const pathY = quadraticBezier(
      startY,
      viewport.height * 0.08,
      approachY,
      travelProgress
    );
    const ambientFloat = Math.sin(state.clock.elapsedTime * 0.78) * 0.032;
    const settlingLift = Math.sin(settleProgress * Math.PI) * 0.055;

    leftRing.position.set(
      THREE.MathUtils.lerp(leftPathX, leftFinalX, joinProgress),
      THREE.MathUtils.lerp(pathY, finalY, joinProgress) + settlingLift + ambientFloat,
      THREE.MathUtils.lerp(0, 0.12, joinProgress)
    );
    rightRing.position.set(
      THREE.MathUtils.lerp(rightPathX, rightFinalX, joinProgress),
      THREE.MathUtils.lerp(pathY, finalY, joinProgress) - settlingLift * 0.5 - ambientFloat,
      THREE.MathUtils.lerp(0, -0.12, joinProgress)
    );

    const leftFlipX = 0.32 + flipProgress * Math.PI * 2.3;
    const leftFlipY = -0.48 + flipProgress * Math.PI * 1.3;
    const rightFlipX = -0.28 - flipProgress * Math.PI * 2.2;
    const rightFlipY = 0.5 - flipProgress * Math.PI * 1.24;

    leftRing.rotation.set(
      THREE.MathUtils.lerp(leftFlipX, Math.PI * 2 + 0.2, joinProgress),
      THREE.MathUtils.lerp(leftFlipY, Math.PI * 2 + 0.78, joinProgress),
      THREE.MathUtils.lerp(-0.24, -0.46, joinProgress) + settlingLift * 0.28
    );
    rightRing.rotation.set(
      THREE.MathUtils.lerp(rightFlipX, -Math.PI * 2 - 0.2, joinProgress),
      THREE.MathUtils.lerp(rightFlipY, -Math.PI * 2 - 0.78, joinProgress),
      THREE.MathUtils.lerp(0.24, 0.46, joinProgress) - settlingLift * 0.28
    );

    leftRing.scale.setScalar(scale);
    rightRing.scale.setScalar(scale);

    if (meetingLightRef.current) {
      meetingLightRef.current.position.set(0, finalY + 0.25, 2.1);
      meetingLightRef.current.intensity = joinProgress * 0.3 + settleProgress * 0.75;
    }
  });

  return (
    <>
      <ScrollInvalidator progress={progress} />

      <ambientLight intensity={0.4} color="#fff4dc" />
      <directionalLight position={[4, 6, 7]} intensity={2.2} color="#ffedc2" />
      <pointLight position={[-4, 1, 4]} intensity={3.2} color="#d6ae5c" distance={12} />
      <pointLight ref={meetingLightRef} color="#ffe09a" distance={6} decay={2} />

      <Environment resolution={128}>
        <Lightformer
          form="rect"
          color="#fff8e8"
          intensity={3}
          position={[0, 5, -4]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[8, 3, 1]}
        />
        <Lightformer
          form="rect"
          color="#dec58a"
          intensity={2.2}
          position={[-5, 1, 2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[5, 2, 1]}
        />
        <Lightformer
          form="rect"
          color="#f6dfaa"
          intensity={1.8}
          position={[5, -1, 1]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[4, 2, 1]}
        />
      </Environment>

      <WeddingRing
        geometry={geometry}
        groupRef={leftRingRef}
        material={material}
        name="left-wedding-ring"
      />
      <WeddingRing
        geometry={geometry}
        groupRef={rightRingRef}
        material={material}
        name="right-wedding-ring"
      />
    </>
  );
}
