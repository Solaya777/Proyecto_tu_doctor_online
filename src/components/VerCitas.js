import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { API_URL } from "../auth/constants";
import { useAuth } from "../auth/AuthProvider";

const VerCitas = () => {
  const [data, setData] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/informacion`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.getAccessToken()}`,
          },
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [auth]);

  const handleRowAdd = async (newData, resolve) => {
    try {
      const response = await fetch(`${API_URL}/informacion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
        body: JSON.stringify(newData),
      });
      const result = await response.json();
      setData([...data, result]);
      resolve();
    } catch (error) {
      console.error("Error al agregar la cita:", error);
      resolve();
    }
  };

  const handleRowUpdate = async (newData, oldData, resolve) => {
    try {
      // Asegúrate de que las fechas estén en formato ISO
      const updatedData = {
        ...newData,
        fecha_agendamiento: new Date(newData.fecha_agendamiento).toISOString(), // Convierte la fecha a formato ISO
        fecha_nacimiento: new Date(newData.fecha_nacimiento).toISOString(), // Si también necesitas convertir la fecha de nacimiento
      };
  
      const response = await fetch(`${API_URL}/informacion/${oldData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Error en la actualización');
      }
  
      const result = await response.json();
  
      // Actualizar los datos en el estado
      const updatedTableData = [...data];
      const index = oldData.tableData.id;
      updatedTableData[index] = result;
      setData(updatedTableData);
  
      resolve();
    } catch (error) {
      console.error('Error al actualizar la cita:', error);
      resolve();
    }
  };

  const handleRowDelete = async (oldData, resolve) => {
    try {
      const response = await fetch(`${API_URL}/informacion/${oldData._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth.getAccessToken()}`,
        },
      });
      if (response.ok) {
        const updatedData = [...data];
        const index = oldData.tableData.id;
        updatedData.splice(index, 1);
        setData(updatedData);
      }
      resolve();
    } catch (error) {
      console.error("Error al eliminar la cita:", error);
      resolve();
    }
  };

  const theme = createTheme({
    direction: "ltr",
  });

  return (
    <ThemeProvider theme={theme}>
      <MaterialTable
        title="Historial de sus Citas médicas"
        columns={[
          { title: "Nombre", field: "name" },
          { title: "Teléfono", field: "telefono", type: "numeric" },
          { title: "Género", field: "genero" },
          {
            title: "Fecha de Nacimiento",
            field: "fecha_nacimiento",
            type: "date",
          },
          {
            title: "Fecha de Agendamiento", editable: 'onUpdate',
            field: "fecha_agendamiento",
            type: "date",
          },
          { title: "Motivo de Consulta", field: "motivo_consulta" },
        ]}
        data={data}
        options={{
          search: true,
          sorting: true,
          actionsColumnIndex: -1, // Esto asegura que las acciones están en la última columna
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              handleRowAdd(newData, resolve, reject);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              handleRowUpdate(newData, oldData, resolve, reject);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              handleRowDelete(oldData, resolve, reject);
            }),
        }}
      />
    </ThemeProvider>
  );
};

export default VerCitas;
