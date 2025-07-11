import React from 'react'
import './Logos.css'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

const Logos = () => {
    return (
        <div className="logos-section">
            <div className="logos-container">
                <div className="logo-item">
                    <img src={logo1} alt="" />
                </div>
                <div className="logo-item">
                    <img src={logo2} alt="" />
                </div>
                <div className="logo-item logo3">
                    <img src={logo3} alt="" />
                </div>
                <div className="logo-item ">
                    <img src={logo4} alt="" />
                </div>
                <div className="logo-item">
                    <img src={logo5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Logos