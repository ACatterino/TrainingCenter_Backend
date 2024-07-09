// routes/inscripcionRoutes.js
const express = require('express');
const router = express.Router();
const inscripcionController = require('../controllers/inscripcionController');

router.get('/inscripciones', inscripcionController.getAllInscripciones);
router.get('/inscripciones/:id', inscripcionController.getInscripcionById);
router.post('/inscripciones', inscripcionController.createInscripcion);
router.put('/inscripciones/:id', inscripcionController.updateInscripcion);
router.delete('/inscripciones/:id', inscripcionController.deleteInscripcion);

module.exports = router;

