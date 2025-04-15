import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import MouseLookerCharacter from "../components/MouseLookerCharacter";
import Button from "../components/Button";

function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">It's a me, Nacho! <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray-50">Software Engineer and Game Developer</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                <ambientLight intensity={1} />  
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    <Suspense fallback={<CanvasLoader />}>
                        <MouseLookerCharacter scale = {50} position={[1, -88, -10]} rotation={[-1.5708, 0, 0]}/>
                    </Suspense>
                </Canvas>
               
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together!" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>

        </section>
    )
}

export default Hero;