import React, { useState, useEffect, useRef } from "react";
import { Button } from ".././Buttons/Buttons";
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import "./Navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// https://fontawesome.com/v6/icons?q=Table&o=r&s=solid

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);
  const dropdownRef = useRef(null);
  const navRef = useRef(null); // New ref

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleDropdown = () => setDropdown(!dropdown);
  const closeDropdown = () => setDropdown(false);
  const preventRedirect = (e) => {
    e.preventDefault();
    handleDropdown();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    if (click) {
      disableBodyScroll(navRef.current);  // Lock body scroll when mobile menu is open
    } else {
      enableBodyScroll(navRef.current);  // Enable body scroll when mobile menu is closed
    }
  }, [click]);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>

            <img
              src="https://sotisimmo.s3.eu-north-1.amazonaws.com/Sotis_AI_pure_240px.png"
              alt="MyLogo"
              className="logo"
            />
            <h3 className="navbar-h3">
              <span style={{fontSize: '26px'}}>S</span>otis <span style={{fontSize: '26px'}}>A</span>dvanced <span style={{fontSize: '26px'}}>I</span>nsights
            </h3>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className={click ? "nav-item dropdown active" : "nav-item dropdown"}
              onClick={handleDropdown} onMouseLeave={closeDropdown} ref={dropdownRef}>
              <Link to="#" className="nav-links" onClick={preventRedirect}>
                Portfolio{" "}
                {/* <i className={click ? "fas fa-caret-up" : "fas fa-caret-down"} /> */}
                <i className= "fas fa-caret-down" />
              </Link>
              {dropdown && (
              <ul className="dropdown-menu">
                <li>
                    <Link to="/data-science" className="dropdown-link" onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faChartLine} className="round-icon" /> Data science
                    </Link>
                </li>
                <li>
                    <Link to="/signal-processing" className="dropdown-link" onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faWaveSquare} className="round-icon" /> Signal processing
                    </Link>
                </li>
                <li>
                    <Link to="/development" className="dropdown-link" onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faCode} className="round-icon" /> Development
                    </Link>
                </li>
                <li>
                    <Link to="/dashboards" className="dropdown-link" onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faTable} className="round-icon" /> Dashboards
                    </Link>
                </li>
              </ul>
              )}
            </li>
            <li
              className={click ? "nav-item dropdown active" : "nav-item dropdown"}
              onClick={handleDropdown} onMouseLeave={closeDropdown} ref={dropdownRef}>
              <Link to="#" className="nav-links" onClick={preventRedirect}>
                About{" "}
                {/* <i className={click ? "fas fa-caret-up" : "fas fa-caret-down"} /> */}
                <i className= "fas fa-caret-down" />
              </Link>
              {dropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/about" className="dropdown-link" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faTimeline} className="round-icon" /> History
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials" className="dropdown-link" onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faStar} className="round-icon" /> Testimonials                      
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            {button && (
              <li>
                <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
