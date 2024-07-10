// CRUD mensajes

const db = require('../db/db');

exports.getAllMessages = (req, res) => {
    const sql = 'SELECT * FROM mensaje';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

exports.getMessageById = (req, res) => {
    const sql = 'SELECT * FROM mensaje WHERE id_mensaje = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.createMessage = (req, res) => {
    const sql = 'INSERT INTO mensaje SET ?';
    const newMessage = req.body;
    db.query(sql, newMessage, (err, result) => {
        if (err){ return res.status(500).json({err:"Intente mas tarde"});}
        res.json(result);
    });
};

exports.updateMessage  = (req, res) => {
    const sql = 'UPDATE mensaje SET ? WHERE id_mensaje = ?';
    const updatedUser = req.body;
    db.query(sql, [updatedUser, req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.deleteMessage = (req, res) => {
    const sql = 'DELETE FROM mensaje WHERE id_mensaje= ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};


