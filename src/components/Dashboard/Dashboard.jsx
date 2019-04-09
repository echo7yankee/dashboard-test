import React from "react";
import Chart from "./Chart";
import Tasks from "./Tasks";
import ADS from "./ADS";

const Dashboard = () => {
  return (
    <div>
      <Chart />
      <Tasks />
      <ADS />
    </div>
  );
};

export default Dashboard;
