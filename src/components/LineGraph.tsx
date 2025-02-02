import React from "react";
import { Line } from "@ant-design/plots";
import "./LineGraph.css";

const LineGraph = ({ package1, package2 }) => {
  // Transform package1 and package2 data into the required format
  const transformData = (packageData, category) => {
    return packageData.map((item) => ({
      year: new Date(item.from).getFullYear().toString(), // Extract year from the date
      value: item.count, // Use the count as the value
      category: category, // Assign the category (package name)
    }));
  };

  // Generate data for the graph
  const data = [
    ...transformData(package1, "Package 1"),
    ...transformData(package2, "Package 2"),
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    padding: [40, 40, 40, 40],
    appendPadding: [0, 0, 0, 0],
    smooth: true,
    theme: {
      background: "#F8F9FA",
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "#E5E7EB",
            lineWidth: 1,
            lineDash: [0, 0],
          },
        },
      },
      line: {
        style: {
          stroke: "#E5E7EB",
          lineWidth: 1,
        },
      },
      tickLine: null,
    },
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: "#E5E7EB",
            lineWidth: 1,
          },
        },
      },
      line: {
        style: {
          stroke: "#E5E7EB",
          lineWidth: 1,
        },
      },
      tickLine: null,
    },
    color: ["#10B981", "#3B82F6"], // Colors for the lines
    tooltip: {
      showMarkers: true,
      shared: true,
    },
    point: {
      size: 4,
      shape: "circle",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    legend: {
      position: "top-left",
      marker: {
        symbol: "circle",
      },
      itemName: {
        style: {
          fill: "#666",
        },
      },
    },
    lineStyle: {
      lineWidth: 2,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          shadowColor: "rgba(0,0,0,0.2)",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };

  return (
    <div className="line-graph-container">
      <Line {...config} />
    </div>
  );
};

export default LineGraph;