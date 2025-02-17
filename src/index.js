// Pasos para correr:  node src/index.js (en la terminal)
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const listViewRouter = require('./routes/list-view-router');
const listEditRouter = require('./routes/list-edit-router');    

let users = require('./data/users');

const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

const validateMethod = (req, res, next) => {
    const { method } = req;
    if (!validMethods.includes(method)) {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    next();
};

app.use(validateMethod); //middleware a nivel de aplicación

const JWTValidation = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log('Token recibido: ', token);

    if (!token) {
        return res.status(401).json({ message: 'Token is required.' });
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
    
};

app.use(express.json()); // middleware para parsear el body de las peticiones, habilita la lectura de JSON en peticiones POST y PUT.

// implementamos los routers
app.use('/api', listViewRouter);
app.use('/api', listEditRouter);

app.post('/login', (req, res) => {    
    const { email } = req.body;
    console.log(email);
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email.' });
    }

    // firmamos
    const token = jwt.sign(
        { email: user.email, name: user.name, rol: user.rol },
        process.env.SECRET_KEY
    );

    res.json(token);
});

// Ruta protegida (/protected)
app.get('/protected', JWTValidation, (req, res) => {
    res.json({ message: 'You have access to this protected route.', user: req.user });
});

// configuración del servidor
const PORT = process.env.PORT || 35000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



