const express = require('express');
const router = express.Router();
const editorialesController = require('../controllers/editorialesController');

// Listar editoriales
router.get('/', editorialesController.getAllEditoriales);

// Crear editorial
router.post('/crear', editorialesController.createEditorial);

// Borrar editorial
router.get('/eliminar/:id', editorialesController.deleteEditorial);

module.exports = router;
