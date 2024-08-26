import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import '@fontsource/poppins';


function App() {
  return (
    <div className="App">
      <Outlet /> {/* Outlet renderiza los componentes según la ruta activa */}
    </div>
  );
}

export default App;
