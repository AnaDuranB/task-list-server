var express = require('express');
var router = express.Router();

const validateTask = (req, res, next) => {
    const { method, body} = req;

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ message: 'Task data is required' });
    }

    if (method === 'POST') {
        if (!body.description) {
            return res.status(400).json({ message: 'Description is required' });
        }
    }

    if (method === 'PUT') {
        if (!body.hasOwnProperty('isCompleted') && !body.description) {
            return res.status(400).json({ message: 'At least one of the attributes is required: "description" or "isCompleted' });
        }
    }

    next();

};


// lista de tareas, datos simulados
let tasks = require('../data/tasks');

// POST /tasks
// Crea una nueva tarea
router.post('/tasks', validateTask, (req, res) => {
    const { description, isCompleted } = req.body;
    if (!description) {
        return res.status(400).json({ message: 'Description is required' });
    }

    const newTask = {
        id: tasks.length + 1,
        isCompleted: isCompleted || false,
        description
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
}); // {"description":"Read a book"} ejemplo postman

// DELETE /tasks/:id
// Eliminar una tarea específica
router.delete('/tasks/:id', validateTask, (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === taskId);
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1); // splice: Elimina la tarea del array en la posición index. El segundo parámetro (1) indica cuántos elementos eliminar.
    res.status(204).send();
});

//PUT /tasks/:id
// Actualiza una tarea específica
router.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.isCompleted = req.body.isCompleted || task.isCompleted;
        task.description = req.body.description || task.description;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
}); // {"description":"Walk the dog (evening)", "isCompleted": true} ejemplo postman

module.exports = router;