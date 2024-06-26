import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' };

  return (
    <div>
      <Parallax pages={15} horizontal={true}>
        {/* Background color of the first page */}
        <ParallaxLayer offset={0} speed={0} style={{ background: '#80404E', zIndex: 4 }} />

        {/* "DAMN." text in the center of the first page */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ ...alignCenter, justifyContent: 'center', zIndex: 5 }}
        >
          <h1 style={{ color: "#FF002A" }}>DAMN.</h1>
        </ParallaxLayer>

        {/* page two bakground */}
        <ParallaxLayer offset={1} speed={0} style={{ background: '#CFD3E5', zIndex: 0 }} />

        {/* Kendrick's picture positioned at the bottom of page two */}
        <ParallaxLayer
          // sticky={{ start: 0, end: 1 }}
          offset={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: '100vh',
            zIndex: 2
          }}
        >
          <img src='./images/KendrickPage2.png' alt="Kendrick Lamar" style={{ width: '50%' }} />
        </ParallaxLayer>
        

        {/* BLOOD text with a different speed */}
        <ParallaxLayer
          offset={1.02} 
          speed={0}
          style={{ display: 'flex', justifyContent: 'center', zIndex: 3 }}
        >
          <h1 style={{ bottom: '80vh', color: "#FF002A" }}>BLOOD.</h1>
        </ParallaxLayer>

        
      </Parallax>
    </div>
  );
}

export default App;