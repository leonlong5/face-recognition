import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
    <div className='central'>
        <img src={imageUrl} alt='face' />
    </div>)
}


export default FaceRecognition;