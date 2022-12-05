import React from 'react'
import './Portfo.css'
// import { Swiper, SwiperSlide } from 'swiper/react'
import Pic1 from '../../img/pic1.png'
import Pic2 from '../../img/pic2.png'
import Pic3 from '../../img/pic3.png'
const Portfo = () => {
    return (
        <div className='portfolio' id="Portfo">
            {/* heading */}

            <span>Recent project</span>
            <span>portfolio</span>

            <swiper
                sapceBetween={30}
                slidesPreview={3}
                grabcursor={true}
                className='portfolio-slider'>
                <swiperSlide>
                    <img src={Pic1} alt="" />
                </swiperSlide>
                <swiperSlide>
                    <img src={Pic2} alt="" />
                </swiperSlide>
                <swiperSlide>
                    <img src={Pic3} alt="" />
                </swiperSlide>
            </swiper>
            <div className='blur c-blur1'
                style={{ background: "var(--purple)" }}></div>
        </div>
    )
}

export default Portfo