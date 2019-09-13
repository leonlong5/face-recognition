import React from 'react';
import Tilt from 'react-tilt'
import brain from './brainicon-small.png'
import './Logo.css'
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2 img-container' options={{max : 55 }} style= {{height: 100, width: 100}}>
                <div className='Tilt-inner'>
                    <img className='logo-img' src={brain} alt='brainIcon'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo