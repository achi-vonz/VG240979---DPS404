'use client';
import React from "react";

export default function ResumenReserva({ reservas }) {
  return (
    <div className="container mt-4">
      <h3 className="text-center text-secondary">Resumen de Reserva</h3>
            {/* mostrar un mensaje si no hay reservas, o la lista de reservas cuando se generen*/}
      {reservas.length === 0 ? (
        <p className="text-center text-muted">No hay canchas reservadas.</p>
      ) : (
        <ul className="list-group">
          {reservas.map((cancha) => (
            <li key={cancha.id} className="list-group-item list-group-item-action">
              {cancha.nombre} - <span className="text-danger fw-bold">Reservada</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
