import React from 'react'
import styles from "./TripBook.module.css"
import tripPostImage from "../assets/trip_post.png";
const { container, parent_trip, trip_child1, trip_child2, trip_lists, trip_list1, trip_list_img, trip_list_text, trip_post, trip_post1, trip_post2, background_color_shadow } = styles;
const TripBook = () => {
  return (
    <section className={container}>
      <div className={parent_trip}>
        <div className={trip_child1}>
          <h3>Easy and Fast</h3>
          <h2>Book Your Next Trip <br /> in 3 Easy Steps</h2>
          <div className={trip_lists}>
            <div className={trip_list1}>
              <div className={trip_list_img}>
                <img src="/images/Group 7.png" alt="" />
              </div>
              <div className={trip_list_text}>
                <h4>Choose Destination</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

            <div className={trip_list1}>
              <div className={trip_list_img}>
                <img src="/images/Group 12.png" alt="" />
              </div>
              <div className={trip_list_text}>
                <h4>Make Payment</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>

            <div className={trip_list1}>
              <div className={trip_list_img}>
                <img src="/images/Group 11.png" alt="" />
              </div>
              <div className={trip_list_text}>
                <h4>Reach Airport on Scheduled Date</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={trip_child2}>
          <div className={trip_post}>
            <img src={tripPostImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TripBook
