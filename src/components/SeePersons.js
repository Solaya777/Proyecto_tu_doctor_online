import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {API_URL} from '../auth/constants';

const VerPersonas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/informacion`); // Cambia esta URL según sea necesario
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const theme = createTheme({
    direction: 'ltr', // o 'rtl' dependiendo del idioma
  });

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title="Historial de Citas médicas por persona"
        columns={[
          { title: 'Nombre', field: 'name' },
          { title: 'Teléfono', field: 'telefono', type: 'numeric' },
          { title: 'Género', field: 'genero' },
          { title: 'Fecha de Nacimiento', field: 'fecha_nacimiento', type: 'date' },
          { title: 'Fecha de Agendamiento', field: 'fecha_agendamiento', type: 'date' },
          { title: 'Motivo de Consulta', field: 'motivo_consulta' },
        ]}
        data={data}
        options={{
          search: true,
          sorting: true,
        }}
      />
    </ThemeProvider>
  );
};

export default VerPersonas;