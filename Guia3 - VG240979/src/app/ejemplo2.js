import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "./styles.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const years = ["2020", "2021", "2022", "2023", "2024", "2025"];

// Función para generar datos aleatorios para ventas
function generateRandomSales() {
  return months.map(month => ({
    mes: month,
    ventas: Math.floor(Math.random() * 2000) + 500 // ventas entre 500 y 2500
  }));
}

export default function Ventas() {
  const [salesData, setSalesData] = useState({});
  const [selectedYears, setSelectedYears] = useState(["2024"]);

  useEffect(() => {
    const data = {};
    years.forEach(year => {
      data[year] = generateRandomSales();
    });
    setSalesData(data);
  }, []);

  const handleRandomize = () => {
    setSalesData(prevData => {
      const updatedData = { ...prevData };
      selectedYears.forEach(year => {
        updatedData[year] = generateRandomSales();
      });
      return updatedData;
    });
  };

  const handleYearChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedYears(selectedOptions);
  };

  const chartData = {
    labels: months,
    datasets: selectedYears.map(year => ({
      label: `Ventas ${year}`,
      data: salesData[year]?.map(record => record.ventas) || [],
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }))
  };

  return (
    <div className="ventas-container">
      <h2 className="section-title">Ventas Mensuales</h2>
      <div className="ventas-controls">
        <label htmlFor="year-select" className="form-label">Años:</label>
        <select
          id="year-select"
          multiple
          onChange={handleYearChange}
          value={selectedYears}
          className="year-selector"
        >
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <button className="btn-randomize" onClick={handleRandomize}>
          Randomize Data
        </button>
      </div>
      <div className="chart-container">
        <Bar 
          data={chartData} 
          options={{ 
            responsive: true, 
            maintainAspectRatio: false, 
            animation: { duration: 1000 } 
          }} 
        />
      </div>
    </div>
  );
}
