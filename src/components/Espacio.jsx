import React from 'react';

const Espacio = ({ espacio, onReservar }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Espacio {espacio.id}</h5>
        <button
          className={`btn ${espacio.ocupado ? 'btn-danger' : 'btn-primary'}`}
          onClick={() => onReservar(espacio.id)}
          disabled={espacio.ocupado}
        >
          {espacio.ocupado ? 'Ocupado' : 'Reservar'}
        </button>
      </div>
    </div>
  );
};

export default Espacio;