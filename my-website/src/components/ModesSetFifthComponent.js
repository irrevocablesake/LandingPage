import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/fifth_texture_atlas.png'

export default function ModelsSetFifthComponent( { nodes } )
{
    const texture = useTexture( texture_file );
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
    })

    return(
        <>
     <mesh name="heart" geometry={nodes.heart.geometry} material={material} position={[2.97, 0.906, -0.065]} />
      <mesh name="gameboy" geometry={nodes.gameboy.geometry} material={material} position={[4.031, 0.11, 0.872]} />
      <mesh name="monster_1" geometry={nodes.monster_1.geometry} material={material} position={[4.72, 0.08, -0.672]} />
      <mesh name="monster_2" geometry={nodes.monster_2.geometry} material={material} position={[4.466, 0.088, 0.382]} />
      <mesh name="monster_3" geometry={nodes.monster_3.geometry} material={material} position={[4.528, 0.092, 0.203]} />
     
        </>
    )
}

