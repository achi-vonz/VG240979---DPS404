import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./styles.css";

// Registrar manualmente los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Graficos() {
  const [ventas, setVentas] = useState([]);
  const [year, setYear] = useState("2024");

  useEffect(() => {
    fetch("/ventas.json")
      .then((res) => res.json())
      .then((data) => setVentas(data));
  }, []);

  // Filtrar datos para el año seleccionado
  const filteredData = ventas.filter((v) => v.año === year);

  const data = {
    labels: filteredData.map((v) => v.mes),
    datasets: [
      {
        label: "Ventas Mensuales",
        data: filteredData.map((v) => v.ventas),
        backgroundColor: "#facc15",
      },
    ],
  };

  return (
    <div className="graficos-container">
      <h2>Gráficos de Barras</h2>
      <div className="ventas-controls">
        <label htmlFor="year-select">Año:</label>
        <select
          id="year-select"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="year-selector"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="chart-container">
        <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
}
