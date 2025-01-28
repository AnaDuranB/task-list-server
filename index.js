const express = require('express');
const app = express();

// Configuración del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// lista de tareas
const tasks = [
    {
        id: 1,
        isCompleted: false,
        description: 'Walk the dog',
    },
    {
        id: 2,
        isCompleted: false,
        description: 'Make the bed',
    }, 
    {
        id: 3,
        isCompleted: false,
        description: 'Make breakfast',
    },
];

// GET /tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});