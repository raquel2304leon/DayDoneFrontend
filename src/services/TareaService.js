// Servicio para comunicarse con el backend Spring Boot
import axios from 'axios';

// URL base del backend
const API_URL = 'http://localhost:3001/tareas';

// Obtener todas las tareas
export const listarTareas = () => axios.get(API_URL);

// Crear una tarea nueva
export const crearTarea = (tarea) => axios.post(API_URL, tarea);

// Actualizar una tarea existente
export const actualizarTarea = (id, tarea) => axios.put(`${API_URL}/${id}`, tarea);

// Eliminar una tarea por ID
export const eliminarTarea = (id) => axios.delete(`${API_URL}/${id}`);

// Obtener una tarea por ID
export const obtenerTarea = (id) => axios.get(`${API_URL}/${id}`);