const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/alumnos', alumnoController.getAllAlumnos);
router.get('/alumnos/:id', alumnoController.getAlumnoById);
router.post('/alumnos', alumnoController.createAlumno);
router.put('/alumnos/:id', alumnoController.updateAlumno);
router.delete('/alumnos/:id', alumnoController.deleteAlumno);

module.exports = router;
