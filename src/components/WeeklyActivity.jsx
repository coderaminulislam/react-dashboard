import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { WeeklyActivityApi } from "../ApicallList/ApiCallMethod";

const WeeklyActivity = () => {
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

// Weekly API Call
const [Activity, setActivity] = useState(null)
useEffect(()=>{
    (async()=>{
        let res = await WeeklyActivityApi();
        setActivity(res.data)
        const dataWeekly = res.data;
        const depoData = dataWeekly.map((item)=> item.deposit);
        const withdrawData = dataWeekly.map((item)=> item.withdraw);
        const daysData = dataWeekly.map((item) => item.days);
       if(dataWeekly){
      setChartData({
        series: [
          {name:"Deposit", data: depoData, color:"#16dbcc"},
          { name: "Withdraw", data: withdrawData, color: "#1814F3" },
        ],
        options: {
                ...chartData.options,
               xaxis: { categories: daysData },
             },
      })
    }


    })()
},[]);

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={224} />
    </div>
  );
};

export default WeeklyActivity;
