import React from 'react'
import './Services.css'
import Card from '../cardss/Card'
import Rishita_Resume from './Rishita_Resume.pdf'

import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png';
const Services = () => {
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className='awsom'>
                <span>My Awesome</span>
                <span>Services</span>
                <span>
                    loresmmckjdhiwvnwjhouw<br />ncnxjwdocjwjclwkejclkewjcw
                </span>
                <a href={Rishita_Resume} download>
                    <button className='button s-button'>Download CV</button></a>
                <div className='blur s-blur1' style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* rightside */}
            <div className='cards'>
                <div style={{ left: '14rem' }}>
                    <Card emoji={Humble} heading={'desgin'}
                        detail={'Figma ,Sketch ,Photoshop,Adobe '} />
                </div>


                <div style={{ left: '-4rem', top: '12rem' }}>
                    <Card emoji={Glasses} heading={'developer'}
                        detail={'html,Sketch ,Photoshop,Adobe '} />
                </div>
                <div style={{
                    left: '12rem', top: '19rem'
                }}>
                    < Card emoji={HeartEmoji} heading={'desgin'}
                        detail={'Figma ,Sketch ,Photoshop,Adobe '} />
                </div>
            </div>
        </div >
    )
}
export default Services