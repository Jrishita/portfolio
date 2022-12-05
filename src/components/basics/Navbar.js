import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'


const Navbar = () => {
    return (
        <>
            <div className='n-wrapper'>
                <div className='n-left'>
                    <div className='n-name'>Rishita</div>
                    {/* <Toggle /> */}

                </div>
                <div className='n-right'>
                    <div className='n-list'>



                        <ul style={{ listStyleType: 'none' }}>
                            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>

                                <li>home</li>
                            </Link>
                            <Link spy={true} to='Services' smooth={true} >

                                <li>services</li></Link>
                            <Link spy={true} to='Exep' smooth={true} >

                                <li>experience</li>
                            </Link>

                            <Link spy={true} to='Portfo' smooth={true} >

                                <li>portfolio</li>
                            </Link>



                        </ul>
                    </div>
                    <Link spy={true} to='Contact' smaooth={true}>
                        <button className='button n-button'>
                            Contact
                        </button>
                    </Link>
                </div>
            </div >
        </>
    )
}

export default Navbar