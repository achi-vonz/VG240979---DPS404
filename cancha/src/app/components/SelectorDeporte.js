'use client';
import React from "react";

export default function SelectorDeporte({ setDeporte }) {
  //deportes disponibles
  const deportes = ["Fútbol", "Baloncesto", "Tenis"];

  return (
    <div className="container text-center my-4">
      <h4 className="mb-3 text-secondary">Selecciona un deporte</h4>
      <div className="btn-group">
        {deportes.map((deporte) => (
     // se mapea el array 'deportes' para crear un botón por cada deporte disponible.
          <button
            key={deporte}
            className="btn btn-outline-primary"
            onClick={() => setDeporte(deporte)}
          >
            {deporte}
          </button>
        ))}
      </div>
    </div>
  );
}