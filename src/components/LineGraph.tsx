import React from "react";
import { Line } from "@ant-design/plots";

import "./LineGraph.css";

const LineGraph = ({package1, package2}) => {
  const data = [
    { year: "1991", value: 3, category: "react-query" },
    { year: "1992", value: 4, category: "react-query" },
    { year: "1993", value: 3.5, category: "react-query" },
    { year: "1994", value: 5, category: "react-query" },
    { year: "1995", value: 4.9, category: "react-query" },
    { year: "1996", value: 6, category: "react-query" },
    { year: "1997", value: 7, category: "react-query" },
    { year: "1998", value: 9, category: "react-query" },
    { year: "1999", value: 13, category: "react-query" },
    { year: "1991", value: 2, category: "swr" },
    { year: "1992", value: 3, category: "swr" },
    { year: "1993", value: 2.8, category: "swr" },
    { year: "1994", value: 3.5, category: "swr" },
    { year: "1995", value: 3.2, category: "swr" },
    { year: "1996", value: 4, category: "swr" },
    { year: "1997", value: 5, category: "swr" },
    { year: "1998", value: 6, category: "swr" },
    { year: "1999", value: 8, category: "swr" },
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
      background: '#F8F9FA'
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: '#E5E7EB',
            lineWidth: 1,
            lineDash: [0, 0],
          },
        },
      },
      line: {
        style: {
          stroke: '#E5E7EB',
          lineWidth: 1,
        },
      },
      tickLine: null,
    },
    yAxis: {
      grid: {
        line: {
          style: {
            stroke: '#E5E7EB',
            lineWidth: 1,
          },
        },
      },
      line: {
        style: {
          stroke: '#E5E7EB',
          lineWidth: 1,
        },
      },
      tickLine: null,
    },
    color: ['#10B981', '#3B82F6'],
    tooltip: {
      showMarkers: true,
      shared: true,
    },
    point: {
      size: 4,
      shape: 'circle',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    legend: {
      position: 'top-left',
      marker: {
        symbol: 'circle',
        
      },
      itemName: {
        style: {
          fill: '#666',
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
          shadowColor: 'rgba(0,0,0,0.2)',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
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