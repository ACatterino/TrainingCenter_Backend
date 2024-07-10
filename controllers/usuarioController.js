// CRUD usuarios
const db = require('../db/db');

exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const sql = 'SELECT * FROM usuario WHERE id_usuario = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.createUser = (req, res) => {
    const sql = 'INSERT INTO usuario SET ?';
    const newUser = req.body;
    db.query(sql, newUser, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.updateUser = (req, res) => {
    const sql = 'UPDATE usuario SET ? WHERE id_usuario = ?';
    const updatedUser = req.body;
    db.query(sql, [updatedUser, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.deleteUser = (req, res) => {
    const sql = 'DELETE FROM usuario WHERE id_usuario= ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};


