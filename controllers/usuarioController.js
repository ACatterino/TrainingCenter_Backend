// CRUD usuarios
const db = require('../db/db');

exports.getAllUsers = (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, results) => {
        if (err)return res.status(500).json({error:"No se ha podido realizar la busqueda"});
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const sql = 'SELECT * FROM usuario WHERE id_usuario = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err)   return res.status(500).json({error:"No se ha podido buscar usuario"});
        if (result.length==0) return res.status(404).json({error:"No existe el usuario"});
        res.json(result);
    });
};

exports.createUser = (req, res) => {
    const sql = 'INSERT INTO usuario SET ?';
    const newUser = req.body;
    db.query(sql, newUser, (err, result) => {
        if (err)   return res.status(500).json({error:"No se ha podido registrar usuario"});
        res.json(result);
    });
};

exports.updateUser = (req, res) => {
    const sql = 'UPDATE usuario SET ? WHERE id_usuario = ?';
    const updatedUser = req.body;
    db.query(sql, [updatedUser, req.params.id], (err, result) => {
        if (err) return res.status(500).json({error:"No se ha podido actualizar usuario"});
        if(result.affectedRows==0)return res.status(404).json({error:"No existe el usuario"});
        res.json(result);
    });
};

exports.deleteUser = (req, res) => {
    const sql = 'DELETE FROM usuario WHERE id_usuario= ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({error:"No se ha podido eliminar usuario"});
        if(result.affectedRows==0)return res.status(404).json({error:"No existe el usuario"});
        
        res.json(result);
    });
};


