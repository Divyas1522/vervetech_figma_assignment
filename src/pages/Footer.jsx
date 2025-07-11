import React from 'react'
import "./Footer.css"
import GooglePlay from "../assets/Google Play.png"
import AppStore from "../assets/Play Store.png"
import SocialIcons from "../assets/Social-icons.png"

const Footer = () => {
    return (
        <div className="footer-section">

            <div className="footer-container">

                <div className="footer-card">
                    <div className="company_desc">
                        <h2>Jadoo.</h2>
                        <p>Book your trip in minute, get full
                            Control for much longer.
                        </p>
                    </div>
                </div>

                <div className="footer-card down ">
                    <div className="nav-row ">
                        <h3>Company</h3>
                        <h4>About</h4>
                        <h4>Careers</h4>
                        <h4>Mobile</h4>
                    </div>
                    <div className="nav-row ">
                        <h3>Contact</h3>
                        <h4>Help/FAQ</h4>
                        <h4>Press</h4>
                        <h4>Affilates</h4>
                    </div>
                    <div className="nav-row ">
                        <h3>More</h3>
                        <h4>Airlinefees</h4>
                        <h4>Airline</h4>
                        <h4>Low fare tips</h4>
                    </div>
                </div>

                <div className="footer-card down">

                    <div className="outbound">
                        <img src={SocialIcons} alt="Social Icons" />
                        <p>Discover our app</p>
                        <div className="app-store-buttons">
                            <img src={GooglePlay} alt="Google Play" />
                            <img src={AppStore} alt="App Store" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="copyrights">
                <p>All rights reserved@jadoo.co</p>
            </div>
        </div>
    )
}

export default Footer