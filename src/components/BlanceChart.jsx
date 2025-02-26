import React from "react";
import Chart from "react-apexcharts";

const BalanceChart = () => {
  const chartOptions = {
    chart: {
      height: 220,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
        categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     
    },
    yaxis:[{
        y: 3,
        border: '1',
        borderColor: '#333'
    }]
    
  };

  const series = [
    {
      name: 'Series 1',
      data: [331, 340, 728, 651, 542, 409, 400],
         color: ['#2D60FF']
    },
  ];

  return (
    <div className="w-full">
      <Chart options={chartOptions} series={series} type="area" height={220} />
    </div>
  );
};

export default BalanceChart;
