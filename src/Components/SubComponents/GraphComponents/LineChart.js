import React from 'react';
import { Line } from 'react-chartjs-2';


function LineChart({ color }) {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July','Aug', 'Oct' ],
    datasets: [
      {
        label: 'Data Series',
        data: [550, 443, 448, 400, 500, 550, 360, 600, 369],
        fill: true, // Fill the area under the line
        borderColor: color,
        backgroundColor: 'transparent',
        pointRadius: 0,
        tension: 0.3, // Adjust the curve intensity
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };
  return <Line data={data} options={options} />

}

export default LineChart;
