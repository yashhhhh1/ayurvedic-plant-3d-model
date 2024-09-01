import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { As } from "./As";


const App = () => {
  

  return (
    <div style={{"width": "100vw" , "height":"100vh" , "background" :"#fff"}}>
      <Canvas>
        <Environment preset="studio"/>
        <OrbitControls />
        <As/>
      </Canvas>
    </div>
  );
};

export default App;
