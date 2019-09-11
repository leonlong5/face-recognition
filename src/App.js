import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';
const ParticlesOptions = {
  particles: {
    number: {
      value: 30,
      density : {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">

        <Particles className='particles'
                params={ParticlesOptions} />
      <Navigation />
      <Logo />
      <ImageLinkForm />
      <FaceRecognition />
    </div>
  );
}

export default App;
