import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const {actions} = useAnimations(animations,ref)
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
