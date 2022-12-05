import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Amazon from '../../img/amazon.png'
import Facebook from '../../img/Facebook.png'
import Shopify from '../../img/Shopify.png'
import Fiver from '../../img/fiverr.png'
import { Link } from 'react-scroll'



const Works = () => {
    return (
        <div className='works'>
            <div className='awsom'>
                <span>works for all these</span>
                <span>Clients</span>
                <span>
                    loresmmckjdhiwvn<br />wjhouw<br />ncnxjwdocjwjclwkejclkewjcw
                </span>

                <button className='button s-button'>Hire me</button>
                <div className='blur s-blur1' style={{ background: "#abf1ff94" }}></div>
            </div>
            {/* risght side */}
            <div className='w-right'>
                <div className='w-maincircle'>
                    <div className='w-seccircle'>
                        <img src={Upwork} alt="" />

                    </div>
                    <div className='w-seccircle'>
                        <img src={Facebook} alt="" />

                    </div>
                    <div className='w-seccircle'>
                        <img src={Amazon} alt="" />

                    </div>
                    <div className='w-seccircle'>
                        <img src={Shopify} alt="" />

                    </div>
                    <  div className='w-seccircle'>
                        <img src={Fiver} alt="" />

                    </div>
                </div>
                <div className='w-backcircle Bluecircle'></div>
                <div className='w-backcircle Yellowcircle'></div>
            </div>
        </div>
    )
}

export default Works