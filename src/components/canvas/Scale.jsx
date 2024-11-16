import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// todo: change the gltf to glb 
// ignore red signs 
const Scale = ({ isMobile }) => {
    
    const scale = useLoader(GLTFLoader, "/public/scaleblack/scene.gltf");
    
return(
    <mesh>
        <ambientLight intensity={ 0.5 } />
        <hemisphereLight 
            intensity={ 0.2 }
            groundColor="black" />
        <spotLight
            position={[ 20, 50, 10 ]}
            angle={ 0.3 }
            penumbra={ 1 }
            intensity={ 1.5 }
            castShadow
            shadow-mapSize= { 1024 }
        />
        <pointLight intensity={ 1 } />        
        {/* is mobile? yes:no  */}
        <primitive
            object={ scale.scene }
            scale={ isMobile ? 0.03 : 0.04  }
            position={ isMobile ? [1, -1, 0.5] : [1, -1, 0] }
            rotation={[ 0, 4, 0 ]}
        />
    </mesh>
    );
};

const ScaleCanvas = () => {
    const [ isMobile, setIsMobile ] = useState(false);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[ 1, 2 ]}
            camera={{ position: [ 0, 2, 2 ], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            {/* <Suspense fallback={ <CanvasLoader/> }> */}
            <Suspense>
                <OrbitControls
                    enableZoom={ false }
                    maxPolarAngle={ Math.PI / 2 }
                    minPolarAngle={ 0.5 }
                />
                <Scale isMobile={ isMobile }/>
                <Preload all />
            </Suspense>
        </Canvas>
    );
};    

export default ScaleCanvas;