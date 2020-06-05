const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM artists`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => { 
    const id = req.params.id;
    const sql =`SELECT * FROM artists WHERE artistId = ${id}`;
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
    const newArtist = req.body;
    const sql = `INSERT INTO artists (Name)
    VALUES("${newArtist.Name}")`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("New Artist is Created")
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const newArtist = req.body;
    
    const sql = `UPDATE artists SET Name = "${newArtist.Name}"
    WHERE artistId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Selected Artist is Updated")
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM artists WHERE ArtistId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Selected Artist is Deleted");
    });
   }
}

module.exports = controllers;
