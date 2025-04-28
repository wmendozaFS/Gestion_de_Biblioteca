const express = require('express');
const router = express.Router();
const editorialesController = require('../controllers/editorialesController');

// Listar editoriales
router.get('/', editorialesController.getAllEditoriales);

// Crear editorial
router.post('/crear', editorialesController.createEditorial);

// Borrar editorial
router.get('/eliminar/:id', editorialesController.deleteEditorial);

// Mostrar formulario de edición
router.get('/editar/:id', autoresController.editEditorialForm);

// Guardar cambios
router.post('/editar/:id', autoresController.updateEtorial);


module.exports = router;
