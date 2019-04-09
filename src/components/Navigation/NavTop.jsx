import React from "react";

import Logo from "../../img/svg/Logo";
import { SettingsIcon } from "../../img/svg/Icons";
import profile from "../../img/profile.png";

import "./navigation.css";

const NavTop = () => {
  return (
    <nav className="navTop">
      <Logo />
      <ul className="navTop-items">
        <li className="navTop-item align-center mr">
          <span className="mr align-center">
            <SettingsIcon icon="icon icon-grey-color" />
          </span>
          <span>SETTINGS</span>
        </li>
        <li className="navTop-item">
          <img className="profile-img" src={profile} alt="profile" />
        </li>
      </ul>
    </nav>
  );
};

export default NavTop;
