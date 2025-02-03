// Pasos para instalaaar:  node index.js (en la terminal)

const express = require('express');
const app = express();

// Configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



