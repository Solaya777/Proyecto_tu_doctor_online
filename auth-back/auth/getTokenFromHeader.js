function getTokenFromHeader(headers) {
    if (headers && headers.authorization) {
        const parts = headers.authorization.split(' '); // Separar por espacio
        if (parts.length === 2  && parts[0] === 'Bearer') { // Comprobar si hay exactamente dos partes
            return parts[1]; // Retornar la segunda parte (el token)
        } 
    } else {
        return null;
    }
}

module.exports = getTokenFromHeader;
