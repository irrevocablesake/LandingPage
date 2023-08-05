import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/fourth_texture_atlas.png'

export default function ModelsSetFourthComponent( { nodes } )
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
        <mesh name="dish_bread" geometry={nodes.dish_bread.geometry} material={material} position={[4.91, 0.036, 0.404]} />
      <mesh name="character_walkman" geometry={nodes.character_walkman.geometry} material={material} position={[3.952, 0.155, 0.699]} />
      <mesh name="character_walter_white" geometry={nodes.character_walter_white.geometry} material={material} position={[3.336, 0.223, -0.368]} />
      <mesh name="cookies" geometry={nodes.cookies.geometry} material={material} position={[4.615, 0.02, -0.468]} />
      <mesh name="cup" geometry={nodes.cup.geometry} material={material} position={[4.869, 0.045, -0.531]} />

        </>
    )
}

