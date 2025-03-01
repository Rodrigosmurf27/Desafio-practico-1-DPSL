'use client'; // Marca este componente como Client Component

import React, { useState } from 'react';
import SelectorZona from '../components/SelectorZona';
import PlanoParqueo from '../components/PlanoParqueo';
import ResumenReserva from '../components/ResumenReserva';

const zonas = ['Cubierto', 'Descubierto', 'VIP'];

export default function Home() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState(zonas[0]);
  const [espacios, setEspacios] = useState([
    { id: 'A1', ocupado: false, zona: 'Cubierto' },
    { id: 'A2', ocupado: false, zona: 'Cubierto' },
    { id: 'A3', ocupado: true, zona: 'Cubierto' },
    { id: 'A4', ocupado: false, zona: 'Cubierto' },
    { id: 'A5', ocupado: false, zona: 'Cubierto' },
    { id: 'A6', ocupado: false, zona: 'Cubierto' },
    { id: 'B1', ocupado: false, zona: 'Descubierto' },
    { id: 'B2', ocupado: false, zona: 'Descubierto' },
    { id: 'B3', ocupado: false, zona: 'Descubierto' },
    { id: 'B4', ocupado: false, zona: 'Descubierto' },
    { id: 'B5', ocupado: true, zona: 'Descubierto' },
    { id: 'B6', ocupado: false, zona: 'Descubierto' },
    { id: 'C1', ocupado: false, zona: 'VIP' },
    { id: 'C2', ocupado: true, zona: 'VIP' },
    { id: 'C3', ocupado: false, zona: 'VIP' },
    { id: 'C4', ocupado: false, zona: 'VIP' },
    { id: 'C5', ocupado: false, zona: 'VIP' },
    { id: 'C6', ocupado: false, zona: 'VIP' },
  ]);
  const [reserva, setReserva] = useState(null);

  const handleSeleccionarZona = (zona) => {
    setZonaSeleccionada(zona);
  };

  const handleReservar = (id) => {
    const espacio = espacios.find((e) => e.id === id);
    if (espacio && !espacio.ocupado) {
      const nuevosEspacios = espacios.map((e) =>
        e.id === id ? { ...e, ocupado: true } : e
      );
      setEspacios(nuevosEspacios);
      setReserva({ id: espacio.id, zona: espacio.zona, total: 10 });
    }
  };

  const espaciosFiltrados = espacios.filter((e) => e.zona === zonaSeleccionada);

  return (
    <div className="container mt-4">
    {/* Navbar con imagen de fondo y texto superpuesto */}
    <nav className="navbar navbar-expand-lg navbar-dark mb-4 banner-container">
      <div className="container-fluid">
        <h1 className="banner-text">Reserva de Estacionamiento</h1>
      </div>
    </nav>
  
    {/* Selector de Zona */}
    <SelectorZona zonas={zonas} onSeleccionarZona={handleSeleccionarZona} />
  
    {/* Plano del Parqueo */}
    <PlanoParqueo espacios={espaciosFiltrados} onReservar={handleReservar} />
  
    {/* Resumen de Reserva */}
    <ResumenReserva reserva={reserva} />
  </div>
  );
}