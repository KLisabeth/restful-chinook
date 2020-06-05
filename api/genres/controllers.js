const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM genres`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => { 
    const id = req.params.id
    const sql = `SELECT * FROM genres WHERE GenreId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  create: (req, res) => {
    // read row data from body
    const newGenre = req.body;
    const sql = `INSERT INTO genres (Name)
    VALUES("${newGenre.Name}")`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("New Genre is Created")
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const newGenre = req.body;
    
    const sql = `UPDATE genres SET Name = "${newGenre.Name}"
    WHERE GenreId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Selected Genre is Updated")
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM genres WHERE GenreId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Selected Genre is Deleted");
    });
   }
}

module.exports = controllers;
