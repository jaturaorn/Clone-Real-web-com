import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
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
        data: [0, 10, 20, 30, 45],
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
          color: "rgba(255,99,132,0.15)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
