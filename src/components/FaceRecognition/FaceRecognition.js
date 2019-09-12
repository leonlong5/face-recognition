import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
    <div className='central'>
        <div className='absolute mt2'>
            {imageUrl ? <img id='inputimage' src={imageUrl} alt='face' width="600px" height='auto' /> : null}
            {box ? <div 
                className="bounding-box" 
                style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}>

            </div> : null}
        </div>
    </div>)
}


export default FaceRecognition;