import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const CustomPieChart = ({ pieDataList }) => {
  const [series, setSeries] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "pie",
      height: "260",
    },
    labels: [],
    colors: ["#1E275D", "#FF7F00", "#FF00FF", "#007FFF"],
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["#ffffff"],
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "13px",
        fontWeight: "bold",
        colors: ["#ffffff"],
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
        expandOnClick: false,
        offsetX: 0,
        offsetY: 10,
        customScale: 1.05,
        dataLabels: {
          offset: -10,
        },
        donut: {
          size: "0%",
        },
      },
    },
  });

  useEffect(() => {
      if ( !pieDataList || pieDataList.length === 0) {
        return
      }
      const labels = pieDataList.map((item) => item.category);
      const values = pieDataList.map((item) => item.value);

      setSeries(values); // ✅ Update series separately

      setChartOptions((prev) => ({
        ...prev,
        labels: labels, // ✅ Update labels correctly
      }));

  }, [pieDataList]);

  return (
    <div className="w-full flex justify-center items-center">
      <Chart options={chartOptions} series={series} type="pie" width={270} />
    </div>
  );
};

export default CustomPieChart;
