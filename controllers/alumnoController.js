// CRUD Alumnos
const db = require('../db');

exports.getAllAlumnos = (req, res) => {
    const sql = 'SELECT * FROM alumnos';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getAlumnoById = (req, res) => {
    const sql = 'SELECT * FROM alumnos WHERE id_alumno = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.createAlumno = (req, res) => {
    const sql = 'INSERT INTO alumnos SET ?';
    const newAlumno = req.body;
    db.query(sql, newAlumno, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.updateAlumno = (req, res) => {
    const sql = 'UPDATE alumnos SET ? WHERE id_alumno = ?';
    const updatedAlumno = req.body;
    db.query(sql, [updatedAlumno, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.deleteAlumno = (req, res) => {
    const sql = 'DELETE FROM alumnos WHERE id_alumno = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};


