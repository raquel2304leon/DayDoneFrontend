// Pagina de inicio de sesion de DayDone
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, guardarSesion } from '../services/AuthService';

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  // Manejar el envio del formulario de login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(usuario, contrasena);
      guardarSesion(usuario);
      navigate('/');
    } catch (err) {
      setError('Usuario o contrasena incorrectos');
    }
  };

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.caja}>
        <h2 style={estilos.titulo}>📝 DayDone</h2>
        <h3 style={estilos.subtitulo}>Iniciar Sesion</h3>

        {error && <p style={estilos.error}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <label style={estilos.label}>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            style={estilos.input}
          />

          <label style={estilos.label}>Contrasena:</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            style={estilos.input}
          />

          <button type="submit" style={estilos.boton}>Ingresar</button>
        </form>

        <p style={estilos.texto}>
          No tienes cuenta?{' '}
          <span onClick={() => navigate('/registro')} style={estilos.enlace}>
            Registrate
          </span>
        </p>
      </div>
    </div>
  );
}

const estilos = {
  contenedor: {
    backgroundColor: '#f9f0ff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(123, 45, 139, 0.2)',
    width: '360px',
  },
  titulo: {
    color: '#7B2D8B',
    textAlign: 'center',
    marginBottom: '8px',
  },
  subtitulo: {
    color: '#9B59B6',
    textAlign: 'center',
    marginBottom: '24px',
    fontWeight: 'normal',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  boton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#7B2D8B',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '8px',
  },
  error: {
    color: '#c0392b',
    backgroundColor: '#fde8e8',
    padding: '10px',
    borderRadius: '6px',
    marginBottom: '16px',
    textAlign: 'center',
  },
  texto: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#666',
  },
  enlace: {
    color: '#7B2D8B',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default Login;