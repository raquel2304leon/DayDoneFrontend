// Pagina para crear y editar tareas
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { crearTarea, actualizarTarea, obtenerTarea } from '../services/TareaService';

function FormularioTarea() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Estado del formulario
  const [tarea, setTarea] = useState({
    titulo: '',
    descripcion: '',
    fecha: '',
    prioridad: 'Alta',
    estado: 'Pendiente'
  });

  // Si hay un ID en la URL carga los datos de la tarea para editar
  useEffect(() => {
    if (id) {
      obtenerTarea(id).then((respuesta) => {
        setTarea(respuesta.data);
      });
    }
  }, [id]);

  // Actualiza el estado cuando el usuario escribe en el formulario
  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  // Envia el formulario al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        // Si hay ID actualiza la tarea existente
        await actualizarTarea(id, tarea);
      } else {
        // Si no hay ID crea una tarea nueva
        await crearTarea(tarea);
      }
      // Redirige a la lista despues de guardar
      navigate('/');
    } catch (error) {
      console.error('Error al guardar tarea:', error);
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h2 style={estilos.titulo}>
        {id ? 'Editar Tarea' : 'Nueva Tarea'}
      </h2>

      <form onSubmit={handleSubmit} style={estilos.formulario}>

        {/* Campo titulo */}
        <label style={estilos.label}>Titulo:</label>
        <input
          type="text"
          name="titulo"
          value={tarea.titulo}
          onChange={handleChange}
          required
          style={estilos.input}
        />

        {/* Campo descripcion */}
        <label style={estilos.label}>Descripcion:</label>
        <textarea
          name="descripcion"
          value={tarea.descripcion}
          onChange={handleChange}
          rows="3"
          style={estilos.input}
        />

        {/* Campo fecha */}
        <label style={estilos.label}>Fecha:</label>
        <input
          type="date"
          name="fecha"
          value={tarea.fecha}
          onChange={handleChange}
          style={estilos.input}
        />

        {/* Selector prioridad */}
        <label style={estilos.label}>Prioridad:</label>
        <select
          name="prioridad"
          value={tarea.prioridad}
          onChange={handleChange}
          style={estilos.input}
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>

        {/* Selector estado */}
        <label style={estilos.label}>Estado:</label>
        <select
          name="estado"
          value={tarea.estado}
          onChange={handleChange}
          style={estilos.input}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="En progreso">En progreso</option>
          <option value="Completada">Completada</option>
        </select>

        <button type="submit" style={estilos.boton}>
          {id ? 'Actualizar Tarea' : 'Guardar Tarea'}
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          style={estilos.botonCancelar}
        >
          Cancelar
        </button>

      </form>
    </div>
  );
}

// Estilos del componente
const estilos = {
  contenedor: {
    padding: '30px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  titulo: {
    color: '#1F4E79',
    marginBottom: '20px',
  },
  formulario: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#333',
  },
  input: {
    padding: '8px',
    marginBottom: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  boton: {
    backgroundColor: '#1F4E79',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px',
  },
  botonCancelar: {
    backgroundColor: '#888',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  }
};

export default FormularioTarea;