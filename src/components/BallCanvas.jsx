import { Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, Sphere, useTexture } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader.jsx";

function TechBall (props) {
    const {texture, position, rotation} = props;
    const [decal] = useTexture([props.imageUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={2.25}/>
            <directionalLight position={[0, 0, 0.05]}/>
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
                <Decal map={decal} position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} receiveShadow flatShading/>
            </mesh>
        </Float>
    );
}

function BallCanvas({tech}) {
    return (
        <div className="">
            <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls enableZoom={false} />
                    <TechBall imageUrl={tech.icon}/>
                </Suspense>
            </Canvas>
            <p className="text-white text-m font-semibold animated-text text-center">{tech.name}</p>
        </div>

    );
}

export default BallCanvas;