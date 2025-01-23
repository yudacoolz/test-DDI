import React from "react";
import CardItem from "../components/CardItem";
import {
  faUser,
  faChartColumn,
  faUserGroup,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

import { Pie, Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);

const Home = () => {
  // Data for Pie Chart
  const pieData = {
    labels: ["Approved", "Planned", "Finished,", "in_progress"],
    datasets: [
      {
        label: "Value in %",
        data: [10.4, 23.6, 6.9, 59],
        backgroundColor: ["#61a5fa", "#86efac", "#fd7e15", "#23c55e"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Data for Line Chart
  const lineData = {
    labels: ["Approved", "Planned", "Finished", "in_progress"],
    datasets: [
      {
        label: "Sales",
        data: [10, 90, 0, 30],
        fill: false,
        borderColor: "#36A2EB",
        tension: 0,
      },
    ],
  };
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <CardItem icon={faChartColumn} number="102" label="Rencana Audit" />
        <CardItem icon={faUser} number="62" label="Auditor" />
        <CardItem icon={faBuilding} number="39" label="Objek Audit" />
        <CardItem icon={faUserGroup} number="159" label="Pustaka PKA" />
      </div>

      <div className="flex gap-4 mt-6">
        <div className="bg-white rounded  p-4 flex justify-center items-center w-1/2 ">
          <div className="w-[400px] h-[380px] ">
            <Pie data={pieData} width={400} height={380} />
          </div>
        </div>
        <div className="bg-white rounded  p-4 w-1/2">
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
