const express = require('express');
const router = express.Router();
const prestamosController = require('../controllers/prestamosController');

router.get('/', prestamosController.getAllPrestamos);
router.post('/crear', prestamosController.createPrestamo);
router.get('/eliminar/:id', prestamosController.deletePrestamo);
router.post('/devolver/:id', prestamosController.devolverPrestamo);

module.exports = router;
