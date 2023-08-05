import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import texture_file from '../assets/textures/sixth_texture_atlas.png'

export default function ModelsSetSixthComponent( { nodes } )
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
            <mesh name="text_sake" geometry={nodes.text_sake.geometry} material={material} position={[5.386, 1.036, 0.745]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh name="text_creative_developer" geometry={nodes.text_creative_developer.geometry} material={material} position={[5.343, 1.022, -0.831]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh name="text_summit" geometry={nodes.text_summit.geometry} material={material} position={[5.361, 0.146, -0.039]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh name="text_x" geometry={nodes.text_x.geometry} material={material} position={[5.476, 0.336, 0.692]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh name="text_zero_one" geometry={nodes.text_zero_one.geometry} material={material} position={[5.631, 0.336, -0.722]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh name="text_antiquity" geometry={nodes.text_antiquity.geometry} material={material} position={[5.361, 0.157, 0.693]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
            <mesh name="text_turing_machines" geometry={nodes.text_turing_machines.geometry} material={material} position={[5.361, 0.123, 0.746]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />       
        </>
    )
}

