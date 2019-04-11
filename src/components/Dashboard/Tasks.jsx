import React from "react";

import "./tasks.css";
import {
  GoogleIcon,
  NextArrowIcon,
  ClockIcon,
  CommentIcon,
  CaseIcon
} from "../../img/svg/Icons";

const Tasks = () => {
  return (
    <div className="container margin-section container-tasks">
      <h3 className="ml-big">YOUR TASKS FOR THIS WEEK</h3>
      <div className="task-grid mt">
        <div className="task-google">
          <div className="flex">
            <span>Improve your keyword relevance</span>
            <span>
              <GoogleIcon donutIcon="donut-icon donut-icon-white" />
            </span>
          </div>
          <p>
            Incorporate <b> steakhouse NYC, best burgers</b> and{" "}
            <b> places to eat</b> in the "TITLE" of your website
          </p>
          <div className="flex">
            <button className="task-google-btn">
              COMPLETE NOW
              <span className="align-center ml">
                <NextArrowIcon icon="icon icon-white" />
              </span>
            </button>
            <div className="align-center">
              <span className="align-center mr">
                <ClockIcon icon="icon icon-white" />
              </span>
              <span>10 min</span>
            </div>
          </div>
        </div>
        <div className="task-column">
          <div className="task task-social-media">
            <div className="flex">
              <span>
                Add your company information on <b> Twitter </b>
              </span>
              <span className="mb">
                <CommentIcon donutIcon="icon-medium icon-white" />
              </span>
            </div>
            <div className="align-center">
              <span className="align-center mr">
                <ClockIcon icon="icon icon-white" />
              </span>
              <span>15 min</span>
            </div>
          </div>
          <div className="task task-seo">
            <div className="flex">
              <span>
                Add your company information on <b> Twitter </b>
              </span>
              <span className="mb">
                <CaseIcon donutIcon="icon-medium icon-white" />
              </span>
            </div>
            <div className="align-center">
              <span className="align-center mr">
                <ClockIcon icon="icon icon-white" />
              </span>
              <span>15 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-center-container">
        <button>SEE MORE</button>
      </div>
    </div>
  );
};

export default Tasks;
