'use client'; //indicador necesario para que se ejecutara del lado del cliente, se encuentra en todos los componentes
import React from 'react';

//función Cancha que contiene los botones para manejar la reserva de la cancha
//contiene una clase con un botón que cambia dependiendo del estado
//botón que muestra por dentro el tipo de cancha
export default function Cancha({ cancha, manejarReserva, reservada }) {
  return (
    <div className="text-center m-2">
      <button
        onClick={() => manejarReserva(cancha)}
        className={`btn ${reservada ? 'btn-warning' : 'btn-primary'} w-100 py-2 cancha-btn`}
      >
        {cancha.nombre}
      </button>
      <div className={`estado fw-bold mt-1 ${reservada ? 'text-danger' : 'text-success'}`}>
        {reservada ? 'Ocupada' : 'Disponible'}
      </div>
    </div>
  );
}



