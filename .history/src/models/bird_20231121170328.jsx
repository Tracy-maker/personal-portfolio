import { useGLTF } from "@react-three/drei";
import React from "react";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene)

  return <mesh>plane</mesh>;
};

export default Bird;
