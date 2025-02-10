// Pasos para correr:  node src/index.js (en la terminal)

const express = require('express');
const app = express();
const listViewRouter = require('./routes/list-view-router');
const listEditRouter = require('./routes/list-edit-router');    

const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const validateMethod = (req, res, next) => {
    const { method } = req;
    if (!validMethods.includes(method)) {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    next();
};

app.use(validateMethod); //middleware a nivel de aplicación

app.use(express.json()); // middleware para parsear el body de las peticiones, habilita la lectura de JSON en peticiones POST y PUT.

// implementamos los routers
app.use('/api', listViewRouter);
app.use('/api', listEditRouter);

// configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



