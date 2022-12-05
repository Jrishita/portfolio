import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import boy from '../../img/boy.png';
import Float from '../floating/Float';
import { motion } from 'framer-motion'


const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        < div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span> hy! Iam </span>
                    <span>Rishita Jamwal</span>
                    <span> frontend developer with right level of experience in reportWeb  designing
                        and development
                    </span>

                    <button className=' button i-button'>hire me</button>
                    <div className='i-icons'>
                        {/* <a href="#">Github */}
                        <img src={Github} alt=" " />
                        {/* <a href="#">Lnkedn */}
                        <img src={LinkedIn} alt=" " />
                        {/* <a href="#"> */}
                        <img src={Instagram} alt=" " />
                    </div>

                </div>

            </div>
            <div className='i-right'>

                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                < motion.img initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={{ transition }}

                    src={Glassesimoji} alt="" />
                <motion.div
                    initial={{ top: '-4%', left: '74%' }}
                    whileInView={{ left: '64%' }}
                    transition={{ transition }}
                    style={{ top: '-4 %', left: '68%' }}>

                    <Float image={Crown} txt1='web' txt2='developer' />
                </motion.div>
                <motion.div

                    initial={{ left: '9rem', top: '18rem' }}

                    whileInView={{ left: '0rem' }}
                    transition={{ transition }} style={{ top: '18rem', left: '0rem' }}>
                    <Float image={Thumbup} txt1='best Designs' txt2='awards' />
                </motion.div>
                {/* blur colo */}
                <div className='blur' style={{ background: "rgb(238 210 255) " }}>

                </div>
                <div className='blur' style={{ background: "#c1f5ff", top: '17rem', width: '21rem ', height: '11rem', left: '-9rem' }}>

                </div>
            </div>

        </div >
    )
}

export default Intro