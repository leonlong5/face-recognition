import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: 'db9ef74ada004b6989edc3f52a4eaf13'
})

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.DEMOGRAPHICS_MODEL,
      this.state.input
    ).then(
      function(response) {
        console.log(response)
      },
      function(err) {
        throw new err(err)
      }
    )
  }

  render(){
    return (
      <div className="App">

          <Particles className='particles'
                  params={ParticlesOptions} />
        <Navigation />
        <Logo />
        <ImageLinkForm 
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
