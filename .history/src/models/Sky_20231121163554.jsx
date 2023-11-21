import React from "react";
import SkyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";

const Sky = () => {
  const sky = useGLTF(SkyScene);

  return <mesh></mesh>;
};

export default Sky;
