import React from "react";
import logo from "./../img/ico/logoipsum.svg";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <div>
        <img src={logo} alt="BFJ Heating & Air" />
      </div>
      <div>
        <div className="nav-item-container">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#plumbing">Plumbing</a>
            </li>
            <li>
              <a href="#hvac">HVAC</a>
            </li>
            <li>
              <a href="#indoor-air-quality">Indoor Air Quality</a>
            </li>
            <li>
              <a href="#service-areas">Service Areas</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="banner">
          <a href="tel:202-304-9804" style={{ textDecoration: "none" }}>
            <div class="left-section">
              <b>Call Today</b>
              <br />
              <b class="phone-number">(202) 304-9804</b>
            </div>
          </a>
          <div class="right-section">
            <button class="schedule-button">
              <span class="calendar-icon">📅</span>
              SCHEDULE ONLINE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
