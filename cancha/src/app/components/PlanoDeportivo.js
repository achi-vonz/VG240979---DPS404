'use client';
import React, { useState } from "react";
import Cancha from "./Cancha";

export default function PlanoDeportivo({ deporte, manejarReserva, reservas }) {
  //canchas disponibles con id y nombre
  const canchas = [
    { id: 1, nombre: "Cancha 1" },
    { id: 2, nombre: "Cancha 2" },
    { id: 3, nombre: "Cancha 3" },
    { id: 4, nombre: "Cancha 4" },
  ];
  //duración empezando por 1h
  const [duracion, setDuracion] = useState(1); // duración inicial en 1h
  const precioPorHora = { Fútbol: 17.30, Baloncesto: 14, Tenis: 10.60 }; // precio de cada una
  const total = reservas.length * precioPorHora[deporte] * duracion; //total, tomando el número de reservas y el precio

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Plano Deportivo - {deporte}</h2>
      
      {/* Selector de Duración */}
      <div className="text-center my-3">
        <label className="fw-bold">Duración de la reserva (horas): </label>
        <input 
          type="number" 
          min="1" 
          max="5" 
          className="form-control w-25 mx-auto text-center" 
          value={duracion} 
          onChange={(e) => setDuracion(Number(e.target.value))} 
        />
      </div>

      <div className="row justify-content-center">
        {canchas.map((cancha) => (
          <div key={cancha.id} className="col-md-3 col-sm-6 text-center">
            <Cancha 
              cancha={cancha} 
              manejarReserva={manejarReserva} 
              reservada={reservas.some(r => r.id === cancha.id)} 
            />
          </div>
        ))}
      </div>

      {/*mostrar Total */}
      <div className="text-center mt-4">
        <h4 className="text-success">Total a pagar: ${total}</h4>
      </div>
    </div>
  );
}





