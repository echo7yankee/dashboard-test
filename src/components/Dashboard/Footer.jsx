import React from "react";

import "./footer.css";
import pic1 from "../../img/pic-1.jpg";
import pic2 from "../../img/pic-2.jpg";
import pic3 from "../../img/pic-3.jpg";

const Footer = () => {
  return (
    <div className="container-footer margin-section">
      <div className="footer">
        <div className="footer-info">
          <h4>Why reviews are essential for your business?</h4>
          <span>30 May</span>
          <span className="ml">
            POSTED BY <span className="text-blue">rankingCoach</span>
          </span>
          <p>
            After outlining local SEO as a whole, we will now focus on 3
            different components of client reviews: how ...
          </p>
        </div>

        <div className="footer-img-container">
          <img src={pic1} alt="" className="img" />
        </div>
      </div>
      <div className="footer  margin-section-left">
        <div className="footer-info">
          <h4>rankingCoach ON TOUR!</h4>
          <span>30 May</span>
          <span className="ml">
            POSTED BY <span className="text-blue">rankingCoach</span>
          </span>
          <p>
            March 28th, 07:00. The rankingCoach team is waiting eagerly for the
            coach that will take us to the hosting ...
          </p>
        </div>
        <div className="footer-img-container">
          <img src={pic2} alt="" className="img" />
        </div>
      </div>
      <div className="footer margin-section-left">
        <div className="footer-info">
          <h4>10 terms to know about Search Engine Advertising - Part 1</h4>
          <span>30 May</span>
          <span className="ml">
            POSTED BY <span className="text-blue">rankingCoach</span>
          </span>
          <p>
            Search Engine Advertising refers to advertisements displayed in the
            search engines results, on some websites...
          </p>
        </div>
        <div className="footer-img-container">
          <img src={pic3} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
