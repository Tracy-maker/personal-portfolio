import React from "react";
import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = () => {
  const { scene, animations } = useGLTF(planeScene);
  return <mesh>Plane</mesh>;
};

export default Plane;
