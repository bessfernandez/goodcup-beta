import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
  labels: ['Acidity', 'Body', 'Bitterness', 'Aftertaste', 'Sweetness'],
  datasets: [
    {
      backgroundColor: 'rgba(152, 174, 235, 0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [9.5, 3, 5, 7, 7],
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 10,
      stepSize: 1,
    },
    pointLabels: {
      fontSize: 18,
    },
  },
  legend: {
    display: false,
  },
}

const RadarChart = () => {
  return <Radar data={data} options={options} width={200} height={200} />
}

export default RadarChart
