import { useGLTF, OrbitControls } from '@react-three/drei';
import gltf_File from '../models/main.gltf';

import Models from './Models'

import CameraComponent from './CameraComponent';
import AmbientLightComponent from './AmbientLightComponent';
import SparklesComponent from './SparklesComponent';

export default function Scene()
{
    const { nodes } = useGLTF( gltf_File );  

    return(
        <group dispose={null}>
            <OrbitControls />

            <AmbientLightComponent />
            <SparklesComponent />

            <CameraComponent />
            
            <Models nodes = { nodes } />

        </group>
    )
}

useGLTF.preload( gltf_File )