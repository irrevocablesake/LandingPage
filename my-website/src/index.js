import "./index.css"
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

import Scene from './components/Scene'

function Page()
{
    alert(" You can move around using touch / mouse controls ");
    return(
      <>
        <Canvas>
          <Scene />
        </Canvas>
      </>
    );
}

const domNode = document.getElementById( "root");
const root = createRoot( domNode );
root.render( <Page /> );
