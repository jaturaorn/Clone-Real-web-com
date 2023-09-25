// Chart.js
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "green",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: false,
    },
  ],
};

const LineChart = () => {
  return (
    <div style={{ height: "auto", width: 420 }}>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
