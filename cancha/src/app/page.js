'use client';

// pages/index.js
import { useState } from "react";
import PlanoDeportivo from "./components/PlanoDeportivo";
import ResumenReserva from "./components/ResumenReserva";
import SelectorDeporte from "./components/SelectorDeporte";
import styles from "./page.module.css";

export default function Home() {
  //manejo de cada deporte, comenzando con fútbol
  const [deporte, setDeporte] = useState("Fútbol");
  //manejo de las reservas, inicia un array vacío
  const [reservas, setReservas] = useState([]);

  //agrega o elimina una cancha de las reservas
  const manejarReserva = (cancha) => {
    // si la cancha ya está reservada, se quita; de lo contrario, se añade
    setReservas((prev) => {
      const yaReservada = prev.some((r) => r.id === cancha.id);
      return yaReservada ? prev.filter((r) => r.id !== cancha.id) : [...prev, cancha];
    });
  };

  return (
    <div className={`container ${styles.main}`}>
      <h1 className="text-center my-4">Reserva de Canchas Deportivas</h1>
      <SelectorDeporte setDeporte={setDeporte} />
      <PlanoDeportivo deporte={deporte} manejarReserva={manejarReserva} reservas={reservas} />
      <ResumenReserva reservas={reservas} />
    </div>
  );
}