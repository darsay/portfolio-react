import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import MouseLookerCharacter from "../components/MouseLookerCharacter";

function Hero({className = ""}) {
    return (
        <section className={className}>
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">It's a me, Nacho! <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Software Engineer and Game Developer</p>
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

        </section>
    )
}

export default Hero;