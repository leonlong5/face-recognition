import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onSubmit, onDemoClick }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces and analyzes demographicsin on your pictures. Get it a try!'}
            </p>
            <p className='f3'>
                {'You can try the demo below by clicking the images, you could also paste your own image URL into the input box below.'}
            </p>
            <div className='btn-container'>
                <button className='demoBtn bg1' onClick={onDemoClick} value='1'>
                </button>
                <button className='demoBtn bg2' onClick={onDemoClick} value='2'>>
                </button>
                <button className='demoBtn bg3' onClick={onDemoClick} value='3'>
                </button>
                <button className='demoBtn bg4' onClick={onDemoClick} value='4'>
                </button>
            </div>
            <div className='central'>
                <div className='form central pa4 br3 shadow-5'>
                    <input 
                        className='f4 pa2 w-70 center' 
                        type='text' 
                        onChange={onInputChange}/>
                    <button 
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
                        onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm