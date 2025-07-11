import React from "react";
import styles from "./Categories.module.css";

const { container, categories_list, child1, child2, child3, child4,design,design2,design2_img } = styles;

const Categories = () => {
  return (
    <div className={container}>
      <h2>Categories</h2>
      <h3>We Offer Best Services</h3>
      <div className={categories_list}>
        <div className={child1}>
          <img src="images/Group 48.png" alt="" />
          <h3>Calculated Weather </h3>
          <p>Built Wicket longer <br /> admire do barton <br /> vanity itself do in it.</p>
        </div>
        <div className={child4}>
          <div className={design2}>
            <div className={design2_img}>
              <img src="/images/Group 51.png" alt="" />
            </div>
            <h3>Best Flights</h3>
            <p>Engrossed listening. <br /> Park gate sell they  <br /> west hard for the.</p>
          </div>
          <div className={design}></div>
        </div>
        <div className={child2}>
          <img src="/images/Group 50.png" alt="" />
          <h3>Local Events</h3>
          <p>
            Barton vanity itself do <br /> in it. Preferd to men it <br /> engrossed
            listening.
          </p>
        </div>
        <div className={child3}>
          <img src="/images/Group 49.png" alt="" />
          <h3>Customization</h3>
          <p>We deliver outsourced <br /> aviation services for <br /> military customers</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
