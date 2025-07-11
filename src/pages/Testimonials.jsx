import React from 'react'
import './Testimonials.css'
import profileImg from '../assets/image-profile.png'
import Ellipses from "../assets/circles-testimonals.png"
import paginationImg from "../assets/Pagination-testimonials.png"

const Testimonials = () => {
    return (
        <div className='testimonials-section'>
            <div className="testimonials-container">

                <div className="testimonials-left">
                    <h4>Testimonials</h4>
                    <h2>What people say
                        about Us.</h2>
                    <img src={Ellipses} alt="" />
                </div>

                <div className="testimonials-right">
                    <div className="pagination">
                        <img src={paginationImg} alt="" />
                    </div>

                    <div className="profile-img">
                        <img src={profileImg} alt="" />
                    </div>

                    <div className="comments">
                        <p>“On the Windows talking painted pasture yet its
                            <br />express parties use. Sure last upon he same as <br />
                            knew next. Of believed or diverted no.”</p>
                        <h5>Mike taylor</h5>
                        <h6>Lahore, Pakistan</h6>
                    </div>

                    <div className="comments  second-comment">
                        <p>“On the Windows talking painted pasture yet its <br />
                            express parties use. Sure last upon he same as <br />
                            knew next. Of believed or diverted no.”</p>
                        <h5>Chris Thomas</h5>
                        <h6>CEO of Red Button</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials