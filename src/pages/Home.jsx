import React from 'react';
import './Home.css';
import TravellerImg from "../assets/Traveller.png";
import PlaneImg from "../assets/plane-img.png";
import DecoreImg from "../assets/Decore.png";

const Home = () => {
    return (
        <div className="hero-container">
            <div className='home-section'>
                <div className="left-section">
                    <div className="left-main">
                        <h2>Best Destinations around the world</h2>
                        <div className='heading2'>
                            <h1>Travel, enjoy <img src={DecoreImg} alt="" /><br />
                                and live a new <br />
                                and full life</h1>
                        </div>
                        <div className='para1'>
                            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                        </div>
                        <div className="cta">
                            <div className="btn-1">
                                <button className='cta-button1'>Find out more</button>
                            </div>
                            <div className="btn-2">
                                <button className='cta-button2'>
                                    <div className='play-circle'>
                                        <div className="polygon"></div>
                                    </div>
                                    <p>Play Demo</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="plane-image1">
                        <img src={PlaneImg} alt="" />
                    </div>
                    <div className='image-container'>
                        <img src={TravellerImg} alt="" />
                    </div>
                    <div className="plane-image2">
                        <img src={PlaneImg} alt="" />
                    </div>
                </div>
                <div className="wave-shape">
                    <div className="wave-image">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home