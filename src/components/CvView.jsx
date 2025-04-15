import { useLoader } from '@react-three/fiber';
import { TextureLoader } from "three";
import { useRef } from 'react';

const CvView = (props) => {
  const cvRef = useRef();

  const frontTexture = useLoader(TextureLoader, '\${import.meta.env.BASE_URL}textures/cv-screenshot.png');
  const backTexture = useLoader(TextureLoader, '\${import.meta.env.BASE_URL}textures/tcg-card-back.jpg');
  const alphaTexture = useLoader(TextureLoader, '\${import.meta.env.BASE_URL}textures/alpha-map.png');

  return (
   <group ref={cvRef} {...props}>
      <mesh  position={[-0.001, 0, 0]}>
        <planeGeometry/>
        <meshStandardMaterial  
          map={frontTexture}
          alphaMap={alphaTexture}
          roughness={0.4}
          transparent={true}
        />
      </mesh>

      {/* Back face */}
      <mesh position={[0.001, 0, 0]} rotation={[0, Math.PI, 0]}>
        <planeGeometry/>
        <meshStandardMaterial  
          map={backTexture} 
          alphaMap={alphaTexture}
          roughness={0.4}
          transparent={true}
        />
      </mesh>
   </group>
  );
};

export default CvView;