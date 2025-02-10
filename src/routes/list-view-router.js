var express = require('express');
var router = express.Router();

// Middleware para validar parámetros
const validateParams = (req, res, next) => {
  const { id, status } = req.params;

  // :id (debe ser un número)
  if (id && isNaN(parseInt(id))) {
      return res.status(400).json({ error: "The 'id' parameter must be a valid number" });
  }

  const validStatuses = ['completed', 'incomplete'];
  // :status (debe ser "completed" o "incomplete")
  if (status && !validStatuses.includes(status)) {
      return res.status(400).json({ error: "The 'status' parameter must be 'completed' or 'incomplete'" });
  }

  next();
};


// lista de tareas, datos simulados
let tasks = require('../data/tasks');

// GET /tasks
// Retorna todas las tareas
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id
// Retorna una tarea específica
router.get('/tasks/:id', validateParams, (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(task => task.id === id);
  if (task) {
    res.json(task);
  } else {
      res.status(404).json({ message: 'Task not found' });
  }
});

//GET /tasks/filter/:status
// Retorna un filtro de tareas completas o incompletas
router.get('/tasks/filter/:status', validateParams, (req, res) => {
  const status = req.params.status === 'completed';
  const filteredTasks = tasks.filter(t => t.isCompleted === status);
  res.json(filteredTasks);
});


module.exports = router;