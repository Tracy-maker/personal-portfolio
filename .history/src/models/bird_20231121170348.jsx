import { useGLTF } from "@react-three/drei";
import React from "react";

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);

  return <mesh position={[-5,2, 1]}>plane</mesh>;
};

export default Bird;