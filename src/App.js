import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexWeb from './components/IndexWeb'
import Login from './components/Login';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexWeb />} />
        <Route path="/login" element={<Login />} />
        {/* Agrega aquí más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
