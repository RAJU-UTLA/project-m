import React from "react";
import "./ServicesStyles.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <table className="table">
          <thead>
            <tr className="heading">
              <th>DAY</th>
              <th className="expand">SERVICES</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Worship</td>
              <td>10:00 AM to 01:00 PM</td>
            </tr>
            <tr>
              <td>Monday</td>
              <td>Chain Prayer</td>
              <td>06:00 AM to 06:00 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Church Prayer</td>
              <td>06:00 PM to 08:00 PM</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>-----</td>
              <td>-----</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Bible Study</td>
              <td>06:00 PM to 08:00 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>Fasting Prayer</td>
              <td>10:00 AM to 01:00 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>-----</td>
              <td>-----</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p className="note">
            "<span>All-night prayer</span> will be on every last Friday of the
            month."
          </p>
          <p>10:00PM to 05:00AM</p>
        </div>
      </div>
    </>
  );
};

export default Services;
