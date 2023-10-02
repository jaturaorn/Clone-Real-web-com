// Chart.js
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: false,
      tension: 0.1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
