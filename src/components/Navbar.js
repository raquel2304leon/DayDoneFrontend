// Componente de navegacion principal de DayDone
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cerrarSesion, obtenerSesion } from '../services/AuthService';

function Navbar() {
  const navigate = useNavigate();
  const usuario = obtenerSesion();

  // Cerrar sesion y redirigir al login
  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate('/login');
  };

  return (
    <nav style={estilos.nav}>
      <h1 style={estilos.titulo}>📝 DayDone</h1>
      <div style={estilos.links}>
        <Link to="/" style={estilos.link}>Lista de Tareas</Link>
        <Link to="/nueva" style={estilos.link}>+ Nueva Tarea</Link>
        <span style={estilos.usuario}>Hola, {usuario}</span>
        <button onClick={handleCerrarSesion} style={estilos.botonSalir}>
          Cerrar Sesion
        </button>
      </div>
    </nav>
  );
}

const estilos = {
  nav: {
    backgroundColor: '#7B2D8B',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: 'white',
    margin: 0,
    fontSize: '24px',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
  usuario: {
    color: '#f0d6f5',
    fontSize: '14px',
  },
  botonSalir: {
    backgroundColor: '#c0392b',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  }
};

export default Navbar;