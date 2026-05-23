// Componente de navegacion principal de DayDone
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={estilos.nav}>
      <h1 style={estilos.titulo}>📝 DayDone</h1>
      <div>
        <Link to="/" style={estilos.link}>Lista de Tareas</Link>
        <Link to="/nueva" style={estilos.link}>+ Nueva Tarea</Link>
      </div>
    </nav>
  );
}

// Estilos del componente
const estilos = {
  nav: {
    backgroundColor: '#1F4E79',
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
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '16px',
  }
};

export default Navbar;