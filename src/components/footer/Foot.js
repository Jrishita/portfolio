import React from 'react'
import './Foot.css'
import wave from '../../img/wave.png'
// import Insta from '@iconscout/react-uniconsicons/uil-instagram'
// import Faceboo from '@iconscout/react-uniconsicons/uil-facebook'
// import Git from '@iconscout/react-uniconsicons/uil-github'
const Foot = () => {
    return (
        <div className='footer'>

            <img src={wave} alt="" style={{ width: '100%' }} />
            <div className='f-content'>
                <span>rishita@gmail.com</span>
                <div className='f-icons'>
                    <span>insta</span>
                    <span>facbooke</span>
                    <span>github</span>



                    {/* <Insta color='white' size='3rem' /> */}
                    {/* <Faceboo color='white' size='3rem' /> */}
                    {/* <Git color='white' size='3rem' /> */}
                </div>

            </div>
        </ div>
    )
}

export default Foot