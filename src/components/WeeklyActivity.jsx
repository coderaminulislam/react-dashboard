import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const WeeklyActivity = ({ weeklyDataList }) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "bar",
        height: 224,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "15%",
          endingShape: "rounded",
          borderRadius: 5,
          dataLabels: { position: "top" },
        },
      },
      dataLabels: { enabled: false },
      stroke: { show: false },
      xaxis: { categories: [] },
      fill: { opacity: 1 },
      tooltip: {
        y: {
          formatter: (val) => `$ ${val} thousands`,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });

  useEffect(() => {
    if (!weeklyDataList || weeklyDataList.length === 0) {
      return;
    }

    console.log("weeklyDataList:", weeklyDataList); // ✅ Check incoming data

    const depoData = weeklyDataList.map((item) => item.deposit);
    const withdrawData = weeklyDataList.map((item) => item.withdraw);
    const daysData = weeklyDataList.map((item) => item.days);

    if (!depoData.length && !withdrawData.length) {
      return;
    }

    setChartData({
      series: [
        { name: "Deposit", data: depoData, color: "#16DBCC" },
        { name: "Withdraw", data: withdrawData, color: "#1814F3" },
      ],
      options: {
        ...chartData.options,
        xaxis: { categories: daysData },
      },
    });
  }, [weeklyDataList]);

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={224} />
    </div>
  );
};

export default WeeklyActivity;
