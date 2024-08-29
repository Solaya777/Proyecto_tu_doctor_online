const Informacion = require('../schema/informacion');

// Obtener la información asociada al usuario autenticado
exports.getInformacion = async (req, res) => {
  try {
    // Filtrar la información por el ID del usuario autenticado
    const informacion = await Informacion.find({ idUser: req.user.id })
      .populate({
        path: 'idUser',
        select: 'name'
      });
    res.json(informacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la información' });
  }
};

// Crear nueva información asociada al usuario autenticado
exports.createInformacion = async (req, res) => {
  const { telefono, genero, fecha_nacimiento, fecha_agendamiento, motivo_consulta, name } = req.body;

  if (!telefono || !genero || !fecha_nacimiento || !fecha_agendamiento || !motivo_consulta) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const fechaAgendamiento = new Date(fecha_agendamiento);
  if (isNaN(fechaAgendamiento.getTime())) {
    return res.status(400).json({ error: 'Fecha de agendamiento inválida' });
  }

  try {
    const informacion = new Informacion({
      idUser: req.user.id,  // Asociar la información con el usuario autenticado
      name,
      telefono,
      genero,
      fecha_nacimiento,
      fecha_agendamiento: new Date(fecha_agendamiento),
      motivo_consulta
    });

    const nuevaInformacion = await informacion.save();
    res.status(201).json(nuevaInformacion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la información' });
  }
};

exports.updateInformacion = async (req, res) => {
  const { id } = req.params;
  const { telefono, genero, fecha_nacimiento, fecha_agendamiento, motivo_consulta, name } = req.body;

  // Validar campos requeridos
  if (!telefono || !genero || !fecha_nacimiento || !motivo_consulta) {
    return res.status(400).json({ error: 'Todos los campos excepto fecha_agendamiento son requeridos' });
  }

  // Validar el formato de fecha_agendamiento si se proporciona
  let fechaAgendamiento;
  if (fecha_agendamiento) {
    fechaAgendamiento = new Date(fecha_agendamiento);
    if (isNaN(fechaAgendamiento.getTime())) {
      return res.status(400).json({ error: 'Fecha de agendamiento inválida' });
    }
  }

  try {
    const informacion = await Informacion.findById(id);
    if (!informacion) {
      return res.status(404).json({ error: 'Información no encontrada' });
    }

    if (req.user.id !== informacion.idUser.toString()) {
      return res.status(403).json({ error: 'No tienes permiso para actualizar esta información' });
    }

    // Actualizar los campos permitidos
    informacion.telefono = telefono;
    informacion.genero = genero;
    informacion.fecha_nacimiento = new Date(fecha_nacimiento);
    if (fecha_agendamiento) {
      informacion.fecha_agendamiento = fechaAgendamiento;  
    }
    informacion.motivo_consulta = motivo_consulta;
    informacion.name = name;

    // Guardar la información actualizada
    const updatedInformacion = await informacion.save();
    res.json(updatedInformacion);
  } catch (error) {
    console.error('Error al actualizar la información:', error);
    res.status(500).json({ error: 'Error al actualizar la información' });
  }
};

exports.deleteInformacion = async (req, res) => {
  const { id } = req.params;

  try {
    const informacion = await Informacion.findById(id);
    if (!informacion) {
      return res.status(404).json({ error: 'Información no encontrada' });
    }

    if (req.user.id !== informacion.idUser.toString()) {
      return res.status(403).json({ error: 'No tienes permiso para eliminar esta información' });
    }

    await Informacion.findByIdAndDelete(id);
    res.status(204).end();  // No hay contenido que devolver
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la información' });
  }
};

