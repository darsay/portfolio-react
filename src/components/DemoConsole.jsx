import { useGLTF } from '@react-three/drei'
import { useVideoTexture } from '@react-three/drei'
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function DemoConsole(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(`/models/demo-console.glb`);


  const txt = useVideoTexture(props.texture || '/textures/project/project1.mp4', {
    muted: true,
    loop: true,
    start: true,
    playsInline: true
  });

  useEffect(() => {
    if (txt) {
      txt.flipY = true;
    }


    if (group.current) {
      gsap.fromTo(
        group.current.rotation,
        { y: -Math.PI / 2 },
        { y: 0, duration: 1, ease: 'power3.inOut' }
      );
    }
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={40.115}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[0, -0.031, 0.045]}
          rotation={[0, Math.PI, 0]}
          scale={-0.2}
        >
          <meshToonMaterial map={txt} toneMapped={false} />
        </mesh>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RETROID1_RTR_MAT_0.geometry}
          material={materials.RTR_MAT}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.1}
        />
      </group>
    </group>
  )
}

useGLTF.preload(`/models/demo-console.glb`)

export default DemoConsole;