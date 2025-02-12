// TemperatureConverter.js
import { useState } from "react";
import "./styles.css";

export function TemperatureConverter() {
    const [temp, setTemp] = useState("");
    const [unit, setUnit] = useState("C");
    const [result, setResult] = useState("");

    const handleConvert = () => {
        if (temp === "" || isNaN(temp)) {
            setResult("Ingrese un valor válido");
            return;
        }
        let converted;
        let resultUnit;
        
        if (unit === "C") {
            converted = (parseFloat(temp) * 9) / 5 + 32;
            resultUnit = "°F"; // Fahrenheit
        } else {
            converted = ((parseFloat(temp) - 32) * 5) / 9;
            resultUnit = "°C"; // Celsius
        }

        setResult(`Resultado: ${converted.toFixed(2)} ${resultUnit}`);
    };

    return (
        <div>
            <h2>Conversor de Temperatura</h2>
            <input 
                type="number" 
                value={temp} 
                onChange={(e) => setTemp(e.target.value)} 
            />
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                <option value="C">Celsius a Fahrenheit</option>
                <option value="F">Fahrenheit a Celsius</option>
            </select>
            <button onClick={handleConvert}>Calcular</button>
            <p>{result}</p>
        </div>
    );
}
