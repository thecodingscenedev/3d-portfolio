import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target";
import { calculateSizes } from "../config/constants";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Generic/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

  const scale = isSmall ? 0.07 : isMobile ? 0.08 : isTablet ? 0.09 : 0.1;
  const posX = isSmall ? 0.6 : isMobile ? 0.8 : isTablet ? 1.0 : 1.3;
  const posY = isSmall ? -5 : isMobile ? -7 : isTablet ? -8 : -10;
  const posZ = isSmall ? -2 : isMobile ? -2.5 : isTablet ? -3 : -3.5;
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-36 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am CodingScene.dev <span className="waving-hand">👋🏻</span>
        </p>
        <p className="hero_tag text-gray_gradient">Fullstack Developer</p>
      </div>
      <div className="w-full h-full inset-0 absolute">
        <Canvas style={{ width: "100%", height: "100%" }}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={scale}
                position={[posX, posY, posZ]}
                rotation={[0.14, -3.1, 0.0]}
              />
            </HeroCamera>
            {(!isSmall || !isMobile) && (
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
            )}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-[0] left-0 right-0 w-full z-10 c-space">
        <a href="#contact">
          <Button
            isBeam={true}
            className={"w-[100%] sm:w-[40%] md:w-[35%]"}
            onClick={() => {}}
          >
            Lets work together
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
