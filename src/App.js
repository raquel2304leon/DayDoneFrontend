// Componente raiz de la aplicacion DayDone
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListaTareas from './pages/ListaTareas';
import FormularioTarea from './pages/FormularioTarea';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { estaAutenticado } from './services/AuthService';

// Componente para proteger rutas privadas
function RutaProtegida({ children }) {
  return estaAutenticado() ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas protegidas */}
        <Route path="/" element={
          <RutaProtegida>
            <Navbar />
            <div style={{ backgroundColor: '#f9f0ff', minHeight: '100vh' }}>
              <ListaTareas />
            </div>
          </RutaProtegida>
        } />
        <Route path="/nueva" element={
          <RutaProtegida>
            <Navbar />
            <div style={{ backgroundColor: '#f9f0ff', minHeight: '100vh' }}>
              <FormularioTarea />
            </div>
          </RutaProtegida>
        } />
        <Route path="/editar/:id" element={
          <RutaProtegida>
            <Navbar />
            <div style={{ backgroundColor: '#f9f0ff', minHeight: '100vh' }}>
              <FormularioTarea />
            </div>
          </RutaProtegida>
        } />
      </Routes>
    </Router>
  );
}

export default App;