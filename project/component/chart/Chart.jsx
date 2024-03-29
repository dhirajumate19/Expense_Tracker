import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValue = props.dataPoints.map(
    (datapoints) => datapoints.value
  );
  const totalMaximun = Math.max(...dataPointsValue);
  console.log(totalMaximun);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          lable={dataPoint.label}
          maxValue={totalMaximun}
        />;
      })}
    </div>
  );
}

export default Chart;
