// Servicio para comunicarse con la API de autenticacion DayDoneAuth
import axios from 'axios';

// URL base de la API de autenticacion
const AUTH_URL = 'http://localhost:3002';

// Registrar un nuevo usuario
export const registrar = (usuario, contrasena) => 
    axios.post(`${AUTH_URL}/registro`, { usuario, contrasena });

// Iniciar sesion
export const login = (usuario, contrasena) => 
    axios.post(`${AUTH_URL}/login`, { usuario, contrasena });

// Guardar sesion en localStorage
export const guardarSesion = (usuario) => {
    localStorage.setItem('usuario', usuario);
};

// Obtener usuario de la sesion
export const obtenerSesion = () => {
    return localStorage.getItem('usuario');
};

// Cerrar sesion
export const cerrarSesion = () => {
    localStorage.removeItem('usuario');
};

// Verificar si hay sesion activa
export const estaAutenticado = () => {
    return localStorage.getItem('usuario') !== null;
};