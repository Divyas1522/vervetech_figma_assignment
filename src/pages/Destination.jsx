import React from 'react'
import "./Destination.css"
import RomeImg from "../assets/destination-1.png"
import LondonImg from "../assets/destination-2.png"
import EuropeImg from "../assets/image.png"
import navigation from "../assets/navigation-1.png"
import decore from "../assets/Decore-Destination.png"

const Destination = () => {
    return (
        <div className="destination-section">
            <div className="dest-container">
                <h4>Top Selling</h4>
                <h2>Top Destinations</h2>
                <div className='card-container'>
                    <div className="destination-card">
                        <img src={RomeImg} alt="" />
                        <div className="details-card">
                            <div className="city-price">
                                <p>Rome, Italty</p>
                                <span>$5,42k</span>
                            </div>
                            <div className="trip-days">
                                <img src={navigation} alt="" />
                                <p>10 Days Trip</p>
                            </div>
                        </div>
                    </div>

                    <div className="destination-card">
                        <img src={LondonImg} alt="" />
                        <div className="details-card">
                            <div className="city-price">
                                <p>London, UK</p>
                                <span>$4.2k</span>
                            </div>
                            <div className="trip-days">
                                <img src={navigation} alt="" />
                                <p>12 Days Trip</p>
                            </div>
                        </div>
                    </div>

                    <div className="destination-card">
                        <img src={EuropeImg} alt="" />
                        <div className="details-card">
                            <div className="city-price">
                                <p>Full Europe</p>
                                <span>$15k</span>
                            </div>
                            <div className="trip-days">
                                <img src={navigation} alt="" />
                                <p>20 Days Trip</p>
                            </div>
                        </div>
                    </div>

                    <div className="decore">
                        <img src={decore} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination