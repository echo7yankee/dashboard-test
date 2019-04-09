import React from "react";
import {
  HomeIcon,
  TasksIcon,
  ReportsIcon,
  BlogIcon,
  SEOIcon,
  LocalIcon,
  ADSIcon,
  SettingsIcon
} from "../../img/svg/Icons";

import "./navigation.css";

const NavLeft = () => {
  return (
    <nav className="navLeft">
      <ul className="navLeft-items">
        <li className="navLeft-item align-center mt item-active">
          <span className="mr">
            <HomeIcon icon="icon icon-active" />
          </span>
          <span>OVERVIEW</span>
        </li>
        <li className="navLeft-item align-center mt">
          <span className="mr ">
            <TasksIcon icon="icon" />
          </span>
          <span>TASKS</span>
          <span className="task-number">89</span>
        </li>
        <li className="navLeft-item align-center mt">
          <span className="mr ">
            <ReportsIcon icon="icon" />
          </span>
          <span>REPORTS</span>
        </li>
        <li className="navLeft-item align-center mt">
          <span className="mr">
            <BlogIcon icon="icon" />
          </span>
          <span>BLOG</span>
        </li>
        <li className="navLeft-item mtb flex no-cursor-pointer ">
          <span className="border border-mr" />
          <span className="color-grey">SETTINGS</span>
          <span className="border border-ml" />
        </li>

        <li className="navLeft-item mt">
          <span className="mr">
            <SettingsIcon icon="icon" />
          </span>
          <span>GENERAL</span>
        </li>
        <li className="navLeft-item mt ">
          <span className="mr">
            <SEOIcon icon="icon" />
          </span>
          <span>SEO</span>
        </li>
        <li className="navLeft-item mt">
          <span className="mr">
            <LocalIcon icon="icon" />
          </span>
          <span>LOCAL</span>
        </li>
        <li className="navLeft-item mt">
          <span className="mr">
            <ADSIcon icon="icon" />
          </span>
          <span>ADS</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavLeft;
