import React from "react";
import Chart from "./Chart";
import Tasks from "./Tasks";
import ADS from "./ADS";

const Dashboard = ({ chartData, chartRomania, chartEngland, chartGermany }) => {
  return (
    <div>
      <Chart
        chartData={chartData}
        chartRomania={chartRomania}
        chartEngland={chartEngland}
        chartGermany={chartGermany}
      />
      <Tasks />
      <ADS />
    </div>
  );
};

export default Dashboard;
