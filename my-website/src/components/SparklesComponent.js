import { Sparkles } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import * as THREE from 'three'


export default function SparklesComponent()
{
    useFrame(( { clock } ) => {
     })

    return(
        <>
            <Sparkles count={100} size={5} position={[3, 0.6, 0]} color = "#a2d870" speed={0.3} scale = {[5,1,5]} />
            <Sparkles count={200} size={2} position={[3, 0.6, 0]} color = "gold" speed={0.7} scale = {[5,1,5]}/>
            <Sparkles count={100} size={3} position={[3, 0.6, 0]} color = "white" speed={0.2} scale = {[5,1,5]}/>
            <Sparkles count={200} size={4} position={[3, 0.6, 0]} color = "pink" speed={0.5} scale = {[5,1,5]}/>
        
        </>
    )
}