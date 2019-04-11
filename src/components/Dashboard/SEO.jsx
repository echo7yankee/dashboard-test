import React from "react";

import steakImg from "../../img/steak.jpg";

import "./seo.css";
import {
  GooglePlusIcon,
  DeleteIcon,
  TickAdsIcon,
  FbIcon,
  FoursquareIcon,
  BingIcon,
  GoogleMapsIcon,
  YelpIcon,
  TwitterIcon,
  TumblrIcon,
  YpIcon
} from "../../img/svg/AdsSectionIcons";
import { LinkIcon } from "../../img/svg/Icons";

const SEO = () => {
  return (
    <div className="container margin-section container-SEO">
      <h3>LOCAL SEO</h3>
      <p className="mt-medium">Ongoing Events</p>

      <div className="space-around mt-big">
        <div className="img-container">
          <img className="steak-img" src={steakImg} alt="" />
        </div>

        <div className="info-container ml-big">
          <h4>YOUR CAMPAIGN IS RUNNING ON ADS AUTOPILOT!</h4>
          <p>
            Your campaign is currently running. Your ads have been approved and
            are live. We will continue to monitor and report their performance
            for top results!
          </p>
          <span>LAST SYNC 2017-09-26 11:22</span>
        </div>
      </div>

      <p className="mt-big">Directory Synchronization Status</p>

      <div className="dots mt-medium mb-medium">
        <span className="border-dot mr" />
        <div>
          <span className="dot dot-red mr-small align-center" />
          <span className="dot-text mr ">NO ACCESS</span>
        </div>
        <div>
          <span className="dot dot-orange mr-small align-center" />
          <span className="dot-text mr">SYNC IN PROGRESS</span>
        </div>
        <div>
          <span className="dot dot-green mr-small align-center" />
          <span className="dot-text mr">SYNCED</span>
        </div>
        <div>
          <span className="dot dot-blue mr-small align-center" />
          <span className="dot-text">ACTION REQUIRED</span>
        </div>
        <span className="border-dot ml" />
      </div>

      <div className="companies-container-1">
        <div className="position-relative">
          <span>
            <GooglePlusIcon icon="ads-icon ads-icon-grey" />
          </span>
          <span className="position-absolute">
            <DeleteIcon icon="ads-icon-medium ads-icon-medium-red " />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium position-relative">
          <span>
            <FbIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <DeleteIcon icon="ads-icon-medium ads-icon-medium-red" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span>
            <FoursquareIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <DeleteIcon icon="ads-icon-medium ads-icon-medium-red" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span>
            <BingIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <DeleteIcon icon="ads-icon-medium ads-icon-medium-orange" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium position-relative">
          <span>
            <GoogleMapsIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span>
            <YelpIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
      </div>

      <div className="companies-container-2">
        <div className="position-relative">
          <span>
            <YpIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span>
            <TwitterIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span>
            <TumblrIcon icon="ads-icon" />
          </span>
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span className="ads-round" />
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span className="ads-round" />
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small  ml-small" />
            </span>
          </p>
        </div>
        <div className="ml-medium  position-relative">
          <span className="ads-round" />
          <span className="position-absolute">
            <TickAdsIcon icon="ads-icon-medium ads-icon-medium-green" />
          </span>
          <p>
            <span>GOOGLE PLUS</span>
            <span>
              <LinkIcon icon="ads-icon-small ml-small" />
            </span>
          </p>
        </div>
      </div>
      <div className="btn-center-container border-top">
        <button>SEE MORE</button>
      </div>
    </div>
  );
};

export default SEO;
