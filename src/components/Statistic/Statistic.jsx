import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./statistic.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Statistic() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Average grade",
        data: [3, 2, 3, 4, 2, 3, 4, 3, 2, 4, 3, 4],
        borderColor: "#3366ff",
        backgroundColor: "rgba(51, 102, 255, 0.2)",
        fill: true,
        tension: 0.4, // Adjust this value for curvature
      },
      {
        label: "Exams",
        data: [2, 3, 2, 3, 4, 2, 3, 4, 3, 2, 3, 2],
        borderColor: "#00d68f",
        backgroundColor: "rgba(0, 214, 143, 0.2)",
        fill: true,
        tension: 0.4, // Adjust this value for curvature
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#2e3a59",
        },
      },
      y: {
        beginAtZero: true, // Ensure the y-axis starts at zero
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide the y-axis ticks
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Hide data points
      },
    },
  };

  return (
    <div className="container">
      <div className="statistic">
        <div className="statistic_heading">
          <h4>Statistic</h4>
          <div className="date">
            <FontAwesomeIcon icon={faAngleLeft} className="left_arrow" />
            <span>Aug 2021</span>
            <FontAwesomeIcon icon={faAngleRight} className="right_arrow" />
          </div>
        </div>
        <div className="statistic_subheading">
          <h5>Progress Score</h5>
          <div className="scores">
            <ul>
              <li className="average">Average grade</li>
              <li className="exams">Exams</li>
            </ul>
          </div>
        </div>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
