function esAlfanumerico (cadena) {
    return /^[a-zA-Z0-9_]+$/.test(cadena)
}

module.exports = esAlfanumerico