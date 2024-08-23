const router = require("express").Router();
const { jsonResponse } = require('../lib/jsonResponse');
const User = require("../schema/user");
const getUserInfo =require("../lib/getUserinfo");

router.post("/", async (req, res) => {
    const { username, password } = req.body; // Asegúrate de que los campos son los necesarios para el signup

    // Verificar que los campos requeridos están presentes
    if (!username || !password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Fields are required",
        }));
    }

    try {
        // Buscar el usuario por nombre de usuario
        const user = await User.findOne({ username });
        
        if (user) {
            // Autenticar usuario
            const correctPassword = await user.comparePassword(password, user.password);
            if(correctPassword){
                const accessToken = user.createAccessToken();
                //const refreshToken = await user.createRefreshToken();
                res.status(200).json(jsonResponse(200, { user: getUserInfo(user), accessToken }));
            }else{
                res.status(400).json(jsonResponse(400, {
                    error: "User or password incorrect",
                }));

            }


        } else {
            res.status(400).json(jsonResponse(400, {
                error: "User not found"
            }));
        }

    } catch (error) {
        res.status(500).json(jsonResponse(500, {
            error: "Failed to authenticate user",
        }));
    }
});

module.exports = router;
