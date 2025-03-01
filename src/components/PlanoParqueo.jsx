import React from 'react';
import Espacio from './Espacio';

const PlanoParqueo = ({ espacios, onReservar }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {espacios.map((espacio, index) => (
          <div key={index} className="col">
            <Espacio espacio={espacio} onReservar={onReservar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanoParqueo;