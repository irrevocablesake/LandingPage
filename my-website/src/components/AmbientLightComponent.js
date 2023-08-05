import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AmbientLightComponent()
{
    const objectRef = useRef( null );
    let lightIntensity = null; 

    useFrame(( { clock } ) => {    
        objectRef.current.intensity = Math.sin(clock.elapsedTime) + 1.1;
    });

    return(
        <>
            <ambientLight ref = { objectRef } intensity={1} />
        </>
    )
}