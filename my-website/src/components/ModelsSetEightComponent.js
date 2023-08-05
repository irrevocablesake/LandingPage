import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/eight_texture_atlas.png'

export default function ModelsSetEightComponent( { nodes } )
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
            <mesh name="tv_model_4" geometry={nodes.tv_model_4.geometry} material={material} position={[1.958, 0.103, 1.105]} />
            <mesh name="tv_model_5" geometry={nodes.tv_model_5.geometry} material={material} position={[2.132, 0.114, 1.373]} />
            <mesh name="tv_model_6" geometry={nodes.tv_model_6.geometry} material={material} position={[1.937, 0.47, 1.104]} />
            <mesh name="tv_model_7" geometry={nodes.tv_model_7.geometry} material={material} position={[1.889, 0.301, 1.062]} />       
        </>
    )
}

