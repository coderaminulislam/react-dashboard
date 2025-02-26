import React, { useState } from 'react';
import Chart from "react-apexcharts";

const WeeklyActivity = () => {

    const [state, setState] = useState({
          
        series: [{
          name: 'Diposit',
          data: [120, 155, 257, 356, 261, 358, 500],
          color:'#16DBCC'
        }, 
        {
          name: 'Withdraw',
          data: [200, 185, 301, 298, 387, 405, 491],
          color:'#1814F3'
        }],
        options: {
          chart: {
            type: 'bar',
            height: 224,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false,
            },
             animations: {
              enabled:true,
              easing: "easeinout",
              speed: 800,
             }

          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '15%',
              endingShape: "rounded",
              borderRadius:'5',
              dataLabels: {
                position: 'top'
              },
              barHeight: '100%'
             
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: false,
         
            
          },
          xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          },
     
          fill: {
            opacity: 1,
           

          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          },
          legend:{
            position: 'top',
            horizontalAlign: 'right'
          }
        },
      
      
    });

    return (
        <div>
            <Chart options={state.options} series={state.series} type="bar" height={224} />
        </div>
    );
};

export default WeeklyActivity;