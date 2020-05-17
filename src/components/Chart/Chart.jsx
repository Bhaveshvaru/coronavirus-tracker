import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { blue } from '@material-ui/core/colors';

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    console.log(dailyData);
    fetchAPI();
  }, []);

  const lineChart = dailyData.length 
  ? (
    <Line
      data={{
        labels: dailyData.map(({date})=>date),
        datasets: [{ 
            data: dailyData.map(({confirmed})=>confirmed),
            label:"Infected",
          
            backgroundColor:"rgb(0, 0, 255, 0.5)",
           
            fill:true
        },
        { 
            data: dailyData.map(({deaths})=>deaths),
            label:"Deaths",
            bordercolor:"red",
            backgroundColor:"rgba(255,0,0,0.5)",
            fill:true
        }],
      }}
    />
  ) : null;

  return (
      <div className={styles.container}>
          {lineChart}
          </div>
  )
};

export default Chart;
