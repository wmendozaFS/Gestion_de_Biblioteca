const express = require('express');
const router = express.Router();
const empleadosController = require('../controllers/empleadosController');

// Listar usuarios
router.get('/', empleadosController.getEmpleados);

// Crear usuario
router.post('/crear', empleadosController.createEmpleado);

// Borrar usuario
router.get('/eliminar/:id', empleadosController.deleteEmpleado);

// editar usuario
router.get('/editar/:id', empleadosController.editarEmpleado);

// actualizar usuario
router.post('/actualizar/:id', empleadosController.actualizarEmpleado);

module.exports = router;
