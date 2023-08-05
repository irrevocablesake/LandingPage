import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/second_texture_atlas.png'

export default function ModelsSetTwoComponent( { nodes } )
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
            <mesh name="character_head_on_fire" geometry={nodes.character_head_on_fire.geometry} material={material} position={[1.553, 0.205, -1.001]} />
            <mesh name="character_half_cut" geometry={nodes.character_half_cut.geometry} material={material} position={[2.021, 0.297, -1.712]} />
            <mesh name="bomb_cube_1" geometry={nodes.bomb_cube_1.geometry} material={material} position={[4.729, 0.075, -0.285]} />
            <mesh name="bomb_box_2" geometry={nodes.bomb_box_2.geometry} material={material} position={[4.675, 0.077, -0.125]} />
            <mesh name="character_glasses" geometry={nodes.character_glasses.geometry} material={material} position={[1.135, 0.298, 2.057]} />
        </>
    )
}

