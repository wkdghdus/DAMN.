import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
    <div>
      <Parallax pages = {15}>

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundColor: '#80404E' }}>

          <h1>DAMN.</h1>

        </ParallaxLayer>

        
        


      </Parallax>


    </div>


  )
}

export default App
