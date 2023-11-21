import React from "react";
import { useGLTF } from "@react-three/drei";
const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);
  return <mesh>Plane</mesh>;
};

export default Plane;
