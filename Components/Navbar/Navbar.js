import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };

  return (
    <>
      <nav>
        <h1>HOREB.</h1>
        <div>
          <ul className={click ? "menu active" : "menu"}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: "#019dcd" }} size={35} />
          ) : (
            <FaBars style={{ color: "#019dcd" }} size={35} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
