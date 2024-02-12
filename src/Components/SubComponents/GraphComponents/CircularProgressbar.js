import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the default styles
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

const CircularProgressBar = ({ percentage, color }) => {
  const strokeWidth = 3;
  return (
    <div className="circular-progress-bar" style={{marginTop:"-40px"}}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={35} // Thickness of the progress bar
        styles={{
          // Customize the path and trail colors
          path: {
            stroke: color,
            strokeWidth: strokeWidth,
            strokeLinecap: 'butt', // Flat ends
          },
          trail: {
            stroke: '#f4f3ef',
            strokeWidth: strokeWidth,
          },
          text:{
            display:'none'
          }
        }}
      />
    </div>
  );
};

export default CircularProgressBar;
