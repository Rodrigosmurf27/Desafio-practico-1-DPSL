import React from 'react';

const ResumenReserva = ({ reserva }) => {
  if (!reserva) return null;

  return (
    <div className="resumen-reserva">
      <h3>Resumen de Reserva</h3>
      <p>Espacio: {reserva.id}</p>
      <p>Zona: {reserva.zona}</p>
      <p>Total: ${reserva.total}</p>
    </div>
  );
};

export default ResumenReserva;