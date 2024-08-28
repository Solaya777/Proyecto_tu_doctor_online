const Informacion = require('../schema/informacion'); // Asegúrate de importar el modelo correcto

// Obtener toda la información
exports.getInformacion = async (req, res) => {
  try {
    const informacion = await Informacion.find()
      .populate({
        path: 'idUser',
        select: 'name' 
      });
    res.json(informacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la información' });
  }
};

// Crear nueva información
exports.createInformacion = async (req, res) => {
  const { idUser, telefono, genero, fecha_nacimiento, fecha_agendamiento, motivo_consulta, name } = req.body;

  if (!idUser || !telefono || !genero || !fecha_nacimiento || !fecha_agendamiento || !motivo_consulta) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  try {
    const informacion = new Informacion({
      idUser,
      name,
      telefono,
      genero,
      fecha_nacimiento,
      fecha_agendamiento,
      motivo_consulta
    });

    const nuevaInformacion = await informacion.save();
    res.status(201).json(nuevaInformacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la información' });
  }
};
