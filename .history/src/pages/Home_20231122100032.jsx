import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -12, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [7, 7, 7];
    } else {
      screenScale = [9, 9, 9];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1ebff"
            groundColor="#000000"
            intensity={1}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20, 0]}
            scale={biplaneScale}
          />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
