/**
 * Representa una respuesta de autenticación.
 * @typedef {Object} AuthResponse
 * @property {Object} body - El cuerpo de la respuesta.
 * @property {User} body.user - Información del usuario.
 * @property {string} body.accessToken - El token de acceso.
 * @property {string} body.refreshToken - El token de actualización.
 */

/**
 * Representa una respuesta de error en autenticación.
 * @typedef {Object} AuthResponseError
 * @property {Object} body - El cuerpo del error.
 * @property {string} body.error - El mensaje de error.
 */

/**
 * Representa un usuario.
 * @typedef {Object} User
 * @property {string} __id - El ID del usuario.
 * @property {string} name - El nombre del usuario.
 * @property {string} username - El nombre de usuario.
 */

/**
 * Procesa una respuesta de autenticación.
 * @param {AuthResponse} response - La respuesta de autenticación.
 */
function processAuthResponse(response) {
    if (response && response.body) {
        console.log(response.body.user.name); // Imprime el nombre del usuario
        console.log(response.body.accessToken); // Imprime el token de acceso
        console.log(response.body.refreshToken); // Imprime el token de actualización
    } else {
        console.error('Invalid response format'); // Manejo de error si el formato es inválido
    }
}

/**
 * Maneja un error de autenticación.
 * @param {AuthResponseError} error - El error de autenticación.
 */
function handleAuthError(error) {
    if (error && error.body) {
        console.error(error.body.error); // Imprime el mensaje de error
    } else {
        console.error('Invalid error format'); // Manejo de error si el formato es inválido
    }
}

// Ejemplo de objetos
const user = {
    __id: "12345",
    name: "John Doe",
    username: "johndoe"
};

const authResponse = {
    body: {
        user: user,
        accessToken: "access-token-example",
        refreshToken: "refresh-token-example"
    }
};

const authResponseError = {
    body: {
        error: "Invalid credentials"
    }
};

// Uso de las funciones de ejemplo
processAuthResponse(authResponse);
handleAuthError(authResponseError);
