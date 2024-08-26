import React from "react";
import image from "../../Assets/bakht_singh.jpg";
import "./AboutUsStyles.css";

const AboutUs = () => {
  return (
    <>
      <div className="main_aboutus">
        <div className="aboutus">
          <div>
            <h2>
              "The foundation stone of Horeb Prayer House was laid and it was
              inaugurated by our beloved brother, Bakht Singh. Today, this
              church is blessed with multiple branches."
            </h2>
          </div>
          <div>
            <img src={image} alt="brother" />
          </div>
        </div>

        <div className="branches">
          <h3>Our Branches</h3>

          <div className="b_list">
            <div>
              <p>Chennur</p>
            </div>
            <div>
              <p>Shivaram</p>
            </div>
            <div>
              <p>Somanpalli</p>
            </div>
            <div>
              <p>Algam</p>
            </div>
            <div>
              <p>Hajipur</p>
            </div>
            <div>
              <p>Luxettipet</p>
            </div>
            <div>
              <p>Mamidipalli</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
