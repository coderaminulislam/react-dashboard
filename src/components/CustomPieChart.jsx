import React from "react";
import Chart from "react-apexcharts";

const CustomPieChart = () => {
  const chartOptions = {
    chart: {
      type: "pie",
      height: '260'
    },
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    colors: ["#1E275D", "#FF7F00", "#FF00FF", "#007FFF"], // Matching your chart colors
    legend: {
      show: false, // Hide legend since labels are inside slices
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["#ffffff"], // White stroke to separate slices
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        colors: ["#ffffff"], // White text for better visibility
      },
      formatter: function (val, opts) {
        return `${opts.w.globals.labels[opts.seriesIndex]}`;
    },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.7,
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false, // Disable animation when clicking
        offsetX: 0, // No horizontal shift
        offsetY: 10, // Moves slices slightly outward
        customScale: 1.05, // Makes the chart slightly bigger
        dataLabels: {
          offset: -10, // Adjust label positioning
        },
        donut: {
          size: "0%", // Ensures this is a pie, not a donut chart
        },
      },
    },
  };

  const series = [30, 15, 20, 35]; // Matching your image data

  return (
    <div className="w-full flex justify-center items-center">
      <Chart options={chartOptions} series={series} type="pie" width={270} />
    </div>
  );
};

export default CustomPieChart;
