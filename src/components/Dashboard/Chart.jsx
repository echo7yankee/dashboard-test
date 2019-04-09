import React from "react";

import chartImg from "../../img/chart.png";
import ipadImg from "../../img/svg/iPad.svg";
import iphoneImg from "../../img/svg/iphone.svg";
import macbookImg from "../../img/svg/macbook.svg";

import "./chart.css";
import {
  GoogleIcon,
  LinkIcon,
  CommentIcon,
  CaseIcon
} from "../../img/svg/Icons";

const Chart = () => {
  return (
    <div className="container">
      <h3>LOCAL VISIBILITY</h3>
      <div className="chart-container">
        <div className="chart-img-container">
          <img className="chart-img" src={chartImg} alt="" />
          <div className="status">
            <span>INITIAL</span>
            <span>CURRENT</span>
          </div>
        </div>
        <div className="devices-container">
          <img className="img-absolute macbook" src={macbookImg} alt="" />
          <img className="img-absolute iphone" src={iphoneImg} alt="" />
          <img className="img-absolute ipad" src={ipadImg} alt="" />
        </div>
      </div>

      <div className="donuts-container">
        <div className="donuts">
          <span className=" round-donut-blue">
            <GoogleIcon donutIcon="donut-icon donut-icon-blue" />
          </span>
          <p className="donut-text">
            <span>SEARCH ENGINES</span>
            <span className="ml cursor-pointer">
              <LinkIcon />
            </span>
          </p>
        </div>
        <div className="donuts">
          <span className="round-donut-green">
            <CommentIcon donutIcon="donut-icon donut-icon-green" />
          </span>
          <p className="donut-text">
            <span>SOCIAL MEDIA</span>
            <span className="ml cursor-pointer">
              <LinkIcon />
            </span>
          </p>
        </div>
        <div className="donuts">
          <span className="round-donut-orange">
            <CaseIcon donutIcon="donut-icon donut-icon-orange" />
          </span>
          <p className="donut-text">
            <span>LOCAL SEO</span>
            <span className="ml cursor-pointer">
              <LinkIcon />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
