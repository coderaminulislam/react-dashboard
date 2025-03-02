import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";


const CustomPieChart = () => {



  const [chartData, setChartData]=useState({
    series:[],
    options:{
      
      chart:{type:"pie"},
     
      legend:{
      show:false,
      },
      stroke:{
        show:true,
        width:5
      },
      dataLabels:{
        enabled:true,
        style:{
          fontSize:'13px',
          fontWeight: "bold",
          colors:['#ffffff']
        }
      },
      
      tooltip: {
        enabled: true,
        y: {
          formatter: (val) => `${val}%`,
        },
      },
      formatter:function(val, opts){
        return `${opts.w.globals.labels[opts.seriesIndex]}`

      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 2,
        opacity: 0.7,
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
 
      labels:[],
      colors: ["#1E275D", "#FF7F00", "#FF00FF", "#007FFF"],
    }
  })


  const [expensivelist, setExpensivelist]=useState(null)
  useEffect(()=>{
    fetch("http://inertia-pos.manirul.xyz/api/expense-list")
    .then((response)=>response.json())
    .then((data)=>{
     if(data.status === 'Success'){
      const {entertainment, bill, investment, others}= data.data;

      setChartData({
        series:[entertainment, bill, investment, others],
        options:{
          chart:{type:'pie'},
          labels: ["Entertainment", "Bill", "Investment", "Others"],
        }
      })

     }
    })

    
    

  },[])
  

  return (
    <div className="w-full flex justify-center items-center">
      <Chart
      type="pie"
      width={250}
      height={230}
      series={chartData.series}
      options={chartData.options}

      ></Chart>
    </div>
  );
};

export default CustomPieChart;
