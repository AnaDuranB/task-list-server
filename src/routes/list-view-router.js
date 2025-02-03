var express = require('express');
var router = express.Router();

// lista de tareas, datos simulados
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
// Retorna todas las tareas
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id
// Retorna una tarea específica
router.get('/tasks/:id', (req, res) => {
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
router.get('/tasks/filter/:status', (req, res) => {
  const status = req.params.status;
  const filteredTasks = tasks.filter(task => {
    if (status === 'completed') {
      return task.isCompleted;
    } else if (status === 'incomplete') {
      return !task.isCompleted;
    } else {
      return false;
    }
  });
});


module.exports = router;