import React, { Component } from "react";

import NavTop from "./components/Navigation/NavTop";
import NavLeft from "./components/Navigation/NavLeft";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  state = {
    chartData: {},
    chartGermany: {},
    chartRomania: {},
    chartEngland: {}
  };

  componentWillMount = () => {
    this.getChartData();
  };

  getChartData = () => {
    this.setState({
      chartData: {
        labels: ["Romania", "England", "Germany"],
        datasets: [
          {
            label: "Population",
            data: [1964000, 5562000, 8279000],
            backgroundColor: [
              "rgba(240,40,5,0.6)",
              "rgba(230,230,230,0.6)",
              "rgba(0,0,0,0.6)"
            ]
          }
        ]
      },
      chartRomania: {
        labels: ["Timisoara", "Arad", "Cluj"],
        datasets: [
          {
            label: "City population",
            data: [306462, 162984, 303047],
            backgroundColor: [
              "rgba(240,40,5,0.6)",
              "rgba(230,230,230,0.6)",
              "rgba(0,0,0,0.6)"
            ]
          }
        ]
      },
      chartEngland: {
        labels: ["London", "Bristol", "Luton"],
        datasets: [
          {
            label: "City population",
            data: [8136000, 545907, 163209],
            backgroundColor: [
              "rgba(240,40,5,0.6)",
              "rgba(230,230,230,0.6)",
              "rgba(0,0,0,0.6)"
            ]
          }
        ]
      },
      chartGermany: {
        labels: ["Berlin", "Hamburg", "Bonn"],
        datasets: [
          {
            label: "City population",
            data: [3575000, 1652363, 292234],
            backgroundColor: [
              "rgba(240,40,5,0.6)",
              "rgba(230,230,230,0.6)",
              "rgba(0,0,0,0.6)"
            ]
          }
        ]
      }
    });
  };

  render() {
    return (
      <div className="App">
        <NavTop />
        <div className="display-flex">
          <NavLeft />
          <Dashboard
            chartData={this.state.chartData}
            chartRomania={this.state.chartRomania}
            chartEngland={this.state.chartEngland}
            chartGermany={this.state.chartGermany}
          />
        </div>
      </div>
    );
  }
}

export default App;
