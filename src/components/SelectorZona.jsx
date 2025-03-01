import React from 'react';

const SelectorZona = ({ zonas, onSeleccionarZona }) => {
  return (
    <div className="mb-4 text-center">
      <h3>Selecciona una Zona</h3>
      <div className="d-flex justify-content-center gap-2">
        {zonas.map((zona, index) => (
          <button
            key={index}
            className="btn btn-primary btn-lg"
            onClick={() => onSeleccionarZona(zona)}
          >
            {zona}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectorZona;