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
    console.error("Invalid response format"); // Manejo de error si el formato es inválido
  }
}

/**
 * Maneja un error de autenticación.
 * @param {AuthResponseError} error - El error de autenticación.
 */

function handleAuthError(error) {
  if (error && error.body && error.body.error) {
    console.error(`Error: ${error.body.error}`); // Imprime el mensaje de error
  } else if (error && error.message) {
    console.error(`Error: ${error.message}`); // Imprime el mensaje de error si está en error.message
  } else {
    console.error("Unknown error format"); // Manejo de error si el formato es inválido
  }
}

// Ejemplo de objetos
const user = {
  __id: "12345",
  name: "John Doe",
  username: "johndoe",
};

const authResponse = {
  body: {
    user: user,
    accessToken: "access-token-example",
    refreshToken: "refresh-token-example",
  },
};

const authResponseError = {
  body: {
    error: "Invalid credentials",
  },
};

const AccessToken = {
  statusCode: 0, // Un número inicial, por ejemplo 0
  body: {
    accessToken: "", // Una cadena vacía o el valor inicial que desees
  },
  error: undefined, // Esto es opcional; puedes omitirlo si no hay error
};

// Luego podrías asignar valores a las propiedades:
AccessToken.statusCode = 200; // Ejemplo de un código de estado exitoso
AccessToken.body.accessToken = "tuAccessTokenAquí";
AccessToken.error = "Algo salió mal"; // Esto es opcional

// Uso de las funciones de ejemplo
processAuthResponse(authResponse);
handleAuthError(authResponseError);
