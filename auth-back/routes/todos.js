const router = require("express").Router();
const Todo = require("../schema/todo");

// Ruta GET para obtener todos los todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find(); // Obtiene todos los todos de la base de datos
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los todos" });
  }
});

// Ruta POST para crear un nuevo todo
router.post("/", async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const todo = new Todo({
      title: req.body.title,
      completed: false,
      idUser: req.user.id,
    });

    const newTodo = await todo.save(); // Guarda el nuevo todo en la base de datos
    res.status(201).json(newTodo); // Envía el nuevo todo como respuesta
  } catch (error) {
    res.status(500).json({ error: "Error al crear el todo" });
  }
});

module.exports = router;
