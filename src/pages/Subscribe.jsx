import React from 'react'
import "./Subscribe.css"
import circles1 from "../assets/circle1.png"
import circles2 from "../assets/circles-decore2.png"
import sendImg from "../assets/send.png"
import MessageBox from "../assets/icon-message.png"

const Subscribe = () => {
    return (
        <div className='subscribe-section'>
            <div className="sub-container">
                <div className="background-image">
                    <div className="head-text">
                        <h2>Subscribe to get information, latest news and other
                            interesting offers about Jadoo</h2>
                    </div>
                    <div className="input">
                        <img src={MessageBox} alt="" />
                        <input type="text" placeholder='Your email' />
                    </div>
                    <div className="subscribe-btn">
                        <button>Subscribe</button>
                    </div>
                    <div className="circle1">
                        <img src={circles1} alt="" />
                    </div>
                    <div className="circle2">
                        <img src={circles2} alt="" />
                        <div className="send">
                            <img src={sendImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe