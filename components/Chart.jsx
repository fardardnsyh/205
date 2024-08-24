import React from 'react';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import {Doughnut} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function Chart() {
    const data = {
        labels: ["Paid", "Unpaid"],
        datasets: [{
        label: "Accounts",
        data: [8,2],
        backgroundColor: ["#744bce", "#F48320"],
        borderColor: ["#744bce", "#F48320"]
        }]
    }
  
    const options = {
    
    }
    
    return (
        <div className="chart-container">
            <Doughnut
            data = {data}
            options = {options} 
            ></Doughnut>
        </div>
    )
}