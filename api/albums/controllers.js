const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM albums`;

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
    const sql = `SELECT * FROM albums WHERE albumId = ${id}`;
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
    const newAlbum = req.body;
    const sql = `INSERT INTO albums (Title, ArtistId)
    VALUES("${newAlbum.Title}","${newAlbum.ArtistId}")`;
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
    const newAlbum = req.body;
    
    const sql = `UPDATE albums SET Title = "${newAlbum.Title}",
    ArtistId = "${newAlbum.ArtistId}" WHERE AlbumId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Selected Album is Updated")
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM albums WHERE AlbumId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Selected Album is Deleted");
    });
  },
   
}

module.exports = controllers;
