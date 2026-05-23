// Pagina principal que muestra todas las tareas
import React, { useState, useEffect } from 'react';
import { listarTareas } from '../services/TareaService';
import TareaCard from '../components/TareaCard';

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    cargarTareas();
  }, []);

  const cargarTareas = async () => {
    try {
      const respuesta = await listarTareas();
      setTareas(respuesta.data);
    } catch (error) {
      console.error('Error al cargar tareas:', error);
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h2 style={estilos.titulo}>Lista de Tareas</h2>
      {tareas.length === 0 ? (
        <p>No hay tareas registradas.</p>
      ) : (
        <table style={estilos.tabla}>
          <thead>
            <tr style={estilos.encabezado}>
              <th style={estilos.th}>ID</th>
              <th style={estilos.th}>Titulo</th>
              <th style={estilos.th}>Descripcion</th>
              <th style={estilos.th}>Fecha</th>
              <th style={estilos.th}>Prioridad</th>
              <th style={estilos.th}>Estado</th>
              <th style={estilos.th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                tarea={tarea}
                onEliminar={cargarTareas}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const estilos = {
  contenedor: { padding: '30px' },
  titulo: { color: '#7b2d8b', marginBottom: '20px' },
  tabla: { width: '100%', borderCollapse: 'collapse' },
  encabezado: { backgroundColor: '#9b59b6' },
  th: { color: 'white', padding: '10px', textAlign: 'left' }
};

export default ListaTareas;