import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/seventh_texture_atlas.png'

export default function ModelsSetSeventhComponent( { nodes } )
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
            <mesh name="tv_model_1" geometry={nodes.tv_model_1.geometry} material={material} position={[1.861, 0.101, 0.803]} />
            <mesh name="tv_model_2" geometry={nodes.tv_model_2.geometry} material={material} position={[2.087, 0.363, 1.312]} />
            <mesh name="tv_model_3" geometry={nodes.tv_model_3.geometry} material={material} position={[1.91, 0.636, 1.108]} />     
        </>
    )
}

