import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import facescan from './facescan.png';

const Logo = () => {
    return(
        <Tilt className='logo ma4 br3 parallax-effect-glare-scale'
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.7}
        scale={1.02}
        gyroscope={true}
        >
                <div>
                    <img src={facescan} alt='facescan logo'/>
                </div>
        </Tilt>
    );
}
export default Logo;