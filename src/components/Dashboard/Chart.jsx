import React from "react";
import { Line, Doughnut } from "react-chartjs-2";

import ipadImg from "../../img/svg/iPad.svg";
import iphoneImg from "../../img/svg/iphone.svg";
import macbookImg from "../../img/svg/macbook.svg";

import "./chart.css";

const Chart = ({ chartData, chartRomania, chartEngland, chartGermany }) => {
  return (
    <div className="container">
      <h3>LOCAL VISIBILITY</h3>
      <div className="chart-container">
        <div className="chart-img-container">
          <Line
            data={chartData}
            options={{
              title: {
                display: true,
                text: "Highest country population",
                fontSize: 18
              },
              legend: {
                display: true,
                position: "top",
                labels: {
                  fontColor: "#000"
                }
              },
              tooltips: {
                enabled: true
              }
            }}
          />

          <div className="status">
            <span>Lowest</span>
            <span>Highest</span>
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
          <Doughnut
            data={chartRomania}
            options={{
              title: {
                display: true,
                text: "City population in Romania",
                fontSize: 12
              },
              legend: {
                display: true,
                position: "top",
                labels: {
                  fontColor: "#000"
                }
              },
              tooltips: {
                enabled: true
              }
            }}
          />
        </div>
        <div className="donuts">
          <Doughnut
            data={chartEngland}
            options={{
              title: {
                display: true,
                text: "City population in England",
                fontSize: 12
              },
              legend: {
                display: true,
                position: "top",
                labels: {
                  fontColor: "#000"
                }
              },
              tooltips: {
                enabled: true
              }
            }}
          />
        </div>
        <div className="donuts">
          <Doughnut
            data={chartGermany}
            options={{
              title: {
                display: true,
                text: "City population in Germany",
                fontSize: 12
              },
              legend: {
                display: true,
                position: "top",
                labels: {
                  fontColor: "#000"
                }
              },
              tooltips: {
                enabled: true
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Chart;
