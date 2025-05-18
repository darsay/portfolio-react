import { Plane, useGLTF } from '@react-three/drei'
import { useVideoTexture } from '@react-three/drei'
import { TextureLoader } from "three";
import { useLoader} from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function DemoPhone({texture, videoReady, ...props}) {
  const group = useRef();
  const { nodes, materials } = useGLTF(`/models/low_poly_mobile_phone.glb`);

  const txt = useVideoTexture(videoReady ? (texture || '/textures/project/project1.mp4') : null, {
    muted: true,
    loop: true,
    start: true,
    playsInline: true
  });
  const alphaTexture = useLoader(TextureLoader, `/textures/alpha-map.png`);

  useEffect(() => {
    if (txt?.image) txt.image.muted = true;
    if (txt?.image) txt.image.play().catch(() => {});
    if (txt) txt.flipY = true;

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
        <group position={[0, -15.5, 0]} scale={35} >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group position={[0, 43.978, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Phone_Case_PhoneCase_Mat_0.geometry}
                    material={materials.PhoneCase_Mat}
                    >
                        <meshStandardMaterial color={0x999999} />
                    </mesh>
                    <Plane
                    castShadow
                    receiveShadow
                    scale={[29, 58, 0]}
                    position={[0, 1.9, 0]}
                    
                    rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <meshToonMaterial
                            map={txt}
                            alphaMap={alphaTexture}
                            toneMapped={false}
                            transparent={true}              
                        />
                    </Plane>
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Phone_Camera_PhoneCase_Mat_0.geometry}
                    material={materials.PhoneCase_Mat}
                    position={[8.421, 65.722, -2.875]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[0.889, 1, 1]}
                >
                        <meshStandardMaterial color={0x999999} />
                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Power_Button_PhoneButton_Mat_0.geometry}
                    material={materials.PhoneButton_Mat}
                    position={[15.24, 58.694, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={[1, 1, 1.24]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Volume_Up_PhoneButton_Mat_0.geometry}
                    material={materials.PhoneButton_Mat}
                    position={[-15.122, 58.492, 0]}
                    rotation={[Math.PI / 2, 0, -3.053]}
                    scale={[1, 1, 0.793]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Volume_Down_PhoneButton_Mat_0.geometry}
                    material={materials.PhoneButton_Mat}
                    position={[-15.121, 54.118, 0]}
                    rotation={[Math.PI / 2, 0, -3.053]}
                    scale={[1, 1, 0.793]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_1_PhoneFace_Mat_0.geometry}
                    material={materials.PhoneFace_Mat}
                    position={[9.743, 67.839, -3.564]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.696}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_2_PhoneFace_Mat_0.geometry}
                    material={materials.PhoneFace_Mat}
                    position={[9.743, 64, -3.564]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={1.696}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Camera_Light_Camera_Light1_0.geometry}
                    material={materials.Camera_Light1}
                    position={[6.5, 66.2, -3.564]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.875}
                />
                </group>
            </group>
        </group>
    </group>
  )
}

useGLTF.preload(`/models/low_poly_mobile_phone.glb`)

export default DemoPhone;