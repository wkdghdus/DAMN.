import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';

function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' };

  return (
    <div>
      <Parallax pages={15} horizontal={true}>
        {/* Background color of the first page */}
        <ParallaxLayer offset={0} speed={0} style={{ background: '#80404E', zIndex: 1 }} />

        {/* "DAMN." text in the center of the first page */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ ...alignCenter, justifyContent: 'center', zIndex: 3 }}
        >
          <h1 style={{ color: "#FF002A" }}>DAMN.</h1>
        </ParallaxLayer>

        {/* Kendrick's picture positioned at the bottom of page two */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          speed={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: '100vh',
            zIndex: -1
          }}
        >
          <img src='./images/KendrickPage2.png' alt="Kendrick Lamar" style={{ width: '50%' }} />
        </ParallaxLayer>

        {/* BLOOD text with a different speed */}
        <ParallaxLayer
          speed={0.5}
          style={{ ...alignCenter, justifyContent: 'center', zIndex: -1 }}
        >
          <h1 style={{ color: "#FF002A" }}>BLOOD.</h1>
        </ParallaxLayer>

        {/* Additional layers for demonstrating speed differences */}
        {/* Fast-moving layer */}
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            ...alignCenter,
            justifyContent: 'center',
            zIndex: 4,
            background: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <h1 style={{ color: "#000" }}>Fast Moving Text</h1>
        </ParallaxLayer>

        {/* Slow-moving layer */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{
            ...alignCenter,
            justifyContent: 'center',
            zIndex: 4,
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <h1 style={{ color: "#FFF" }}>Slow Moving Text</h1>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;