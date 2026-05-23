// Componente raiz de la aplicacion DayDone
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListaTareas from './pages/ListaTareas';
import FormularioTarea from './pages/FormularioTarea';

function App() {
  return (
    <Router>
      {/* Barra de navegacion principal */}
      <Navbar />
      {/* Rutas de la aplicacion */}
      <div style={{ backgroundColor: '#f9f0ff', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/nueva" element={<FormularioTarea />} />
          <Route path="/editar/:id" element={<FormularioTarea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;