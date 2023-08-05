import { PerspectiveCamera } from "@react-three/drei"

export default function CameraComponent()
{
    return(
        <PerspectiveCamera name="Camera" makeDefault={true} far={100} near={0.1} fov={22.895} position={[7.863, 0.921, -0.104]} rotation={[-1.72, 1.443, 1.721]} />
    )
}