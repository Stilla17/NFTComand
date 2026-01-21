import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const urlGames = import.meta.env.VITE_URL_API_GAMES;
const UsersGamesChart = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get(urlGames)
      .then(data => setStats(data.data))
      .catch(err => console.error(err));
  }, []);

  if (!stats) return <p>Loading...</p>;

  const data = {
    labels: ["Games"],
    datasets: [
      {
        data: [stats.length],
        backgroundColor: ["#36a2eb"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 w-[360px]">
      <h3 className="text-lg font-semibold mb-4">Users vs Games</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default UsersGamesChart;