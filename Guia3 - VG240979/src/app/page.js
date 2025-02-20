'use client';

import { useState } from "react";
import Planetas from "./ejemplo1";
import Ventas from "./ejemplo2";
import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("planetas");

  return (
    <div className="container">
      <h1 className="title">Aplicación React</h1>
      <div className="tabs">
        <button
          className={`tab-button ${tab === "planetas" ? "active" : ""}`}
          onClick={() => setTab("planetas")}
        >
          Planetas
        </button>
        <button
          className={`tab-button ${tab === "ventas" ? "active" : ""}`}
          onClick={() => setTab("ventas")}
        >
          Ventas
        </button>
      </div>
      <div className="content-wrapper">
        <div className="content animated-content">
          {tab === "planetas" ? <Planetas /> : <Ventas />}
        </div>
      </div>
    </div>
  );
}
