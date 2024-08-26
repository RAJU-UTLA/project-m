import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="#">
          <h2>Horeb Prayer House</h2>
          <div>
            <p className="address">Sangamalliah Palli Cross Road,</p>
            <p className="address">Near Fish Market,</p>
            <p className="address">CCC, Naspur,</p>
            <p className="address">Telangana 504302</p>
            <p className="address">Mobile:72070XXXXX</p>
          </div>
        </div>
        <div className="responsive-map">
          <iframe
            title="Horeb Prayer House Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.4424608263835!2d79.49108896201646!3d18.867935097738954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a32c9ea91c60ce3%3A0xe0fc81b2a7982aa2!2sHOREB%20PRAYER%20HOUSE%20CCC%20NASPUR!5e0!3m2!1sen!2sin!4v1724349426317!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
