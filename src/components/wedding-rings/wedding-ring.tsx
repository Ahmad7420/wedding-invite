import type { RefObject } from "react";
import type { Group, MeshPhysicalMaterial, TorusGeometry } from "three";

type WeddingRingProps = {
  geometry: TorusGeometry;
  groupRef: RefObject<Group | null>;
  material: MeshPhysicalMaterial;
  name: string;
};

export function WeddingRing({
  geometry,
  groupRef,
  material,
  name,
}: WeddingRingProps) {
  return (
    <group ref={groupRef} name={name}>
      <mesh geometry={geometry} material={material} />
    </group>
  );
}
