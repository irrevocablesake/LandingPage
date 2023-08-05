import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/first_texture_atlas.png'

export default function ModelsSetOneComponent( { nodes } )
{
    const texture = useTexture( texture_file );
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const material = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
    })

    return(
        <mesh name="backdrop" geometry={nodes.backdrop.geometry} material = {material} position={[-6.989, 2.881, 0.015]} />
    )
}

