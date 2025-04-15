import { Suspense, useState } from "react";

import { myProjects } from "../constants";

import {Canvas} from "@react-three/fiber";
import { Center, OrbitControls, useVideoTexture } from "@react-three/drei";

import CanvasLoader from "../components/CanvasLoader";
import DemoConsole from "../components/DemoConsole";
import DemoComputer from "../components/DemoComputer";
import DemoPhone from "../components/DemoPhone";

function Projects() {
    const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
    const currentProject = myProjects[selectedProjectIdx];

    // const txt = useVideoTexture('textures/project/project1.mp4');

    const handleNavigation = (direction) => {
        setSelectedProjectIdx((prevIdx) => {
            if(direction === 'previous') {
                return prevIdx === 0 ? myProjects.length - 1 : prevIdx - 1;
            } else {
                return (prevIdx + 1) % myProjects.length;
            }
        })
    }
    
    function renderProjectComponent(type, texture) {
        switch (type) {
            case 'Game':
                return <DemoConsole texture={texture} />;
            case 'Web':
                return <DemoComputer texture={texture} />;
            case 'Mobile':
                return <DemoPhone texture={texture} />;
            default:
                return  <DemoConsole texture={texture} />;
        }
    }
        

    return (
        <section className="c-space my-20" id="work">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full ">
                <div className="flex flex-col gap-5 relative sm_p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={myProjects[0].logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animated-text">{currentProject.title}</p>
                        <p className="animated-text">{currentProject.desc}</p>
                        <p className="animated-text">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo">
                                <img src = {tag.path} alt={tag.name}/>
                            </div>))}
                        </div>
                        <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank">
                            <p>Check it out!</p>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous') }>
                            <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next') }>
                            <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 5]}/>
                        <directionalLight position={[10, 10, -5]}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                            <group scale={1} position={[0, 0, -13]} rotation={[0, 0, 0]}>
                                {renderProjectComponent(currentProject.type, currentProject.videoTexture)}                       
                            </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} target={[0, 0,-13]} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects;