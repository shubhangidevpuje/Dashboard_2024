import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8','9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20'],
    datasets: [
        {
            data: [70, 120, 170, 105, 150, 45, 85, 65, 105, 180, 136, 122, 80, 50, 40, 65, 150, 140, 164, 145],
            backgroundColor: '#fcc468', // Color for Column 1
            barThickness: 5, // Adjust the bar thickness
        },
        {
            data: [70, 120, 170, 105, 150, 45, 85, 65, 105, 180, 136, 122, 80, 50, 40, 65, 150, 140, 164, 145],
            backgroundColor: '#54c0d9', // Color for Column 2
            barThickness: 5, // Adjust the bar thickness
        },
    ],
};

const options = {
    indexAxis: 'x', // Vertical bars
    responsive: true,
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false, // Hide y-axis grid lines
            },
        },

        y: {
            beginAtZero: true,
            grid: {
                display: false, // Hide y-axis grid lines
            },
        },
    },

    plugins: {
        legend: {
            display: false, // Hide legend
        },
    },
};

function DoubleColumnChart() {
    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
}

export default DoubleColumnChart;
