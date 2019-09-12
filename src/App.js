import React, { Component } from 'react';
//import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import AgeGenderCultural from './components/AgeGenderCultural/AgeGenderCultural'
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
      imageUrl: '',

    }
  }

  displayAgeGenderCultural(response) {
    let faceData = response.outputs[0].data.regions[0].data.face;
    console.log(faceData)
    let agesList = faceData.age_appearance.concepts;
    let genderList = faceData.gender_appearance.concepts;
    let multiculturalList = faceData.multicultural_appearance.concepts;
    this.setState({
      agesList: agesList,
      genderList: genderList,
      multiculturalList: multiculturalList
    })
  }

  caculateFaceLocation(data){
    console.log(data)
    let boxList = data.outputs[0].data.regions.map((x)=>{
      return x.region_info.bounding_box
    })
    //console.log(boxList)
    //bounding_box is the face four boundary based on percentage on the page,
    //bounding_box = {top_row: 0.2964545, left_col: 0.26398003, bottom_row: 0.7327663, right_col: 0.7083304}
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    this.setState({ width: width, height: height} )
    let res = boxList.map((obj) => {
      return this.caculateOffset(obj, width, height)
    })
    return res
  }

  caculateOffset(bounding_box, width, height) {
    return {
      leftCol: bounding_box.left_col * width,   //from left to right, width * percentage
      topRow: bounding_box.top_row * height,   //from top to bottom, height * height
      rightCol: width - (bounding_box.right_col * width), //rightCol is entire width - rightCol width
      bottomRow: height - (bounding_box.bottom_row * height) //bottomRow is entire height - bottomRow height
    }
  }

  displayFaceBox = (boxlist) => {
    //console.log(boxlist)
    this.setState({ boxlist: boxlist} )
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
      (response) =>{
        this.displayFaceBox(this.caculateFaceLocation(response))
        this.displayAgeGenderCultural(response)
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
        {/* <Navigation /> */}
        <Logo />
        <ImageLinkForm 
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}/>
        <FaceRecognition 
            imageHeight={this.state.height}
            imageUrl={this.state.imageUrl} 
            boxlist={this.state.boxlist}/>
        <AgeGenderCultural 
            agesList={this.state.agesList} 
            genderList={this.state.genderList}
            multiculturalList={this.state.multiculturalList}/>
      </div>
    );
  }
}

export default App;
