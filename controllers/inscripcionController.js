// controllers/inscripcionController.js
const db = require('../db');

exports.getAllInscripciones = (req, res) => {
    const sql = 'SELECT * FROM inscripciones';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getInscripcionById = (req, res) => {
    const sql = 'SELECT * FROM inscripciones WHERE id_inscripcion = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.createInscripcion = (req, res) => {
    const sql = 'INSERT INTO inscripciones SET ?';
    const newInscripcion = req.body;
    db.query(sql, newInscripcion, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.updateInscripcion = (req, res) => {
    const sql = 'UPDATE inscripciones SET ? WHERE id_inscripcion = ?';
    const updatedInscripcion = req.body;
    db.query(sql, [updatedInscripcion, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.deleteInscripcion = (req, res) => {
    const sql = 'DELETE FROM inscripciones WHERE id_inscripcion = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

