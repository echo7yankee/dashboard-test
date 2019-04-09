import React from "react";

import "./ads.css";
import { DownArrowIcon, TickIcon, StatisticsIcon } from "../../img/svg/Icons";

const ADS = () => {
  return (
    <div className="container container-ADS">
      <div className="flex align-center">
        <h3>SEARCH ENGINE ADS</h3>
        <div className="align-center period">
          <span className="mr">Period:</span>
          <button className="ads-btn ">
            September 2017
            <span>
              <DownArrowIcon icon="down-arrow-icon" />
            </span>
          </button>
        </div>
      </div>
      <p> September 2017 </p>

      <div className="space-between mt-big">
        <div className="icon-container">
          <span className="tick-icon-absolute">
            <TickIcon icon="ads-tick-icon" />
          </span>
          <span>
            <StatisticsIcon icon="ads-statistics-icon" />
          </span>
        </div>
        <div className="sync-container">
          <h4>YOUR CAMPAIGN IS RUNNING ON ADS AUTOPILOT!</h4>
          <p>
            Your campaign is currently running. Your ads have been approved and
            are live. We will continue to monitor and report their performance
            for top results!
          </p>
          <span>LAST SYNC 2017-09-26 11:22</span>
        </div>
      </div>
    </div>
  );
};

export default ADS;
