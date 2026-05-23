// Componente que muestra una tarea individual en la lista
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eliminarTarea } from '../services/TareaService';

function TareaCard({ tarea, onEliminar }) {
  const navigate = useNavigate();

  // Funcion para eliminar la tarea
  const handleEliminar = async () => {
    await eliminarTarea(tarea.id);
    onEliminar();
  };

  // Funcion para ir a la pagina de edicion
  const handleEditar = () => {
    navigate(`/editar/${tarea.id}`);
  };

  return (
    <tr>
      <td style={estilos.td}>{tarea.id}</td>
      <td style={estilos.td}>{tarea.titulo}</td>
      <td style={estilos.td}>{tarea.descripcion}</td>
      <td style={estilos.td}>{tarea.fecha}</td>
      <td style={estilos.td}>{tarea.prioridad}</td>
      <td style={estilos.td}>{tarea.estado}</td>
      <td style={estilos.td}>
        <button onClick={handleEditar} style={estilos.btnEditar}>Editar</button>
        <button onClick={handleEliminar} style={estilos.btnEliminar}>Eliminar</button>
      </td>
    </tr>
  );
}

// Estilos del componente
const estilos = {
  td: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  btnEditar: {
    backgroundColor: '#e790d4',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    marginRight: '8px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  btnEliminar: {
    backgroundColor: '#c02b7d',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
  }
};

export default TareaCard;