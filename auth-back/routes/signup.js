const router = require("express").Router();
const { jsonResponse } = require('../lib/jsonResponse');
const User = require("../schema/user");

router.post("/", async (req, res) => {
    const { username, name, password } = req.body;

    // Verificar que todos los campos requeridos están presentes
    if (!username || !name || !password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Fields are required",
        }));
    }

    try {
        // Comprobar si el nombre de usuario ya existe
        const exists = await User.findOne({ username });

        if (exists) {
            return res.status(400).json(jsonResponse(400, {
                error: "Username already exists",
            }));
        }

        // Crear y guardar el nuevo usuario
        const newUser = new User({ username, name, password });
        await newUser.save();

        res.status(200).json(jsonResponse(200, { message: "User created successfully" }));
    } catch (error) {
        // Manejo de errores si la operación de guardado falla
        console.error("Error creating user:", error); // Log del error para depuración
        res.status(500).json(jsonResponse(500, {
            error: "Failed to create user",
        }));
    }
});

module.exports = router;
