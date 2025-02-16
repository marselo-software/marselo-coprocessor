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

// Registering the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// Function to generate random data
const generateRandomData = (max = 100, min = 0) => {
  const data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min); // Random value within range
  }
  return data;
};

// Blockchain Data Extractor (Model 1)
const blockchainData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Blockchain Transaction Data",
      data: generateRandomData(50, 30),
      borderColor: "rgba(255, 223, 0, 1)", // Yellow color for transactions
      backgroundColor: "rgba(255, 223, 0, 0.2)",
      fill: true,
    },
  ],
};

// AI-Based Market Analysis (Model 2)
const marketAnalysisData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Token Price Prediction",
      data: generateRandomData(80, 40),
      borderColor: "rgba(0, 255, 0, 1)", // Green color for market trends
      backgroundColor: "rgba(0, 255, 0, 0.2)",
      fill: true,
    },
  ],
};

// Liquidity & Risk Assessment (Model 3)
const liquidityData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Liquidity Depth & Risk",
      data: generateRandomData(70, 20),
      borderColor: "rgba(255, 223, 0, 1)", // Yellow color for liquidity
      backgroundColor: "rgba(255, 223, 0, 0.2)",
      fill: true,
    },
  ],
};

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="font-bold font-size-80">MARSELO</h1>

      {/* Model 1: Blockchain Data Extractor */}
      <div className="mt-8 w-2/3">
        <h3 className="text-xl font-semibold">Blockchain Data Extractor</h3>
        <Line data={blockchainData} />
      </div>

      {/* Model 2: AI-Based Market Analysis */}
      <div className="mt-8 w-2/3">
        <h3 className="text-xl font-semibold">AI-Based Market Analysis</h3>
        <Line data={marketAnalysisData} />
      </div>

      {/* Model 3: Liquidity & Risk Assessment */}
      <div className="mt-8 w-2/3">
        <h3 className="text-xl font-semibold">Liquidity & Risk Assessment</h3>
        <Line data={liquidityData} />
      </div>
    </div>
  );
}
