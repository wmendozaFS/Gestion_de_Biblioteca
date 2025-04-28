const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

router.get('/', librosController.getAllLibros);
router.post('/crear', librosController.createLibro);
router.get('/eliminar/:id', librosController.deleteLibro);

module.exports = router;
