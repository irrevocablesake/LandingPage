import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/third_texture_atlas.png'

export default function ModelsSetThreeComponent( { nodes } )
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
            <mesh name="character_ice_cream" geometry={nodes.character_ice_cream.geometry} material={material} position={[1.464, 0.322, -1.305]} />
            <mesh name="character_straw_man" geometry={nodes.character_straw_man.geometry} material={material} position={[1.672, 0.271, -1.578]} />
            <mesh name="character_michael_myers" geometry={nodes.character_michael_myers.geometry} material={material} position={[3.054, 0.252, -0.075]} />
            <mesh name="character_hen" geometry={nodes.character_hen.geometry} material={material} position={[2.551, 0.08, -1.189]} />
            <mesh name="character_magician" geometry={nodes.character_magician.geometry} material={material} position={[3.326, 0.245, 0.23]} />  
        </>
    )
}

