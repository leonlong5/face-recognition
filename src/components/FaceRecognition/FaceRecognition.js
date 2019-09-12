import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageHeight, imageUrl, boxlist }) => {
    return (
    <div className='central' style={{height: imageHeight}}>
        <div className='absolute mt2'>
            {imageUrl ? <img id='inputimage' src={imageUrl} alt='face' width="600px" height='auto' /> : null}
            {boxlist? boxlist.map((box, i) => {
                return <div 
                    key = {i}
                    className="bounding-box" 
                    style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}>
                </div>
            }): null}
            
        </div>
    </div>)
}


export default FaceRecognition;