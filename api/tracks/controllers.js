const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM tracks`;

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
    const sql =`SELECT * FROM tracks WHERE TrackId = ${id}`;
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
    const newTrack = req.body;
    const sql = `INSERT INTO tracks ( 
      Name, 
      AlbumId, 
      MediaTypeId,
      GenreId, 
      Composer, 
      Milliseconds, 
      Bytes, 
      UnitPrice)
    VALUES(
    "${newTrack.Name}", 
    "${newTrack.AlbumId}",
    "${newTrack.MediaTypeId}",
    "${newTrack.GenreId}", 
    "${newTrack.Composer}", 
    "${newTrack.Milliseconds}", 
    "${newTrack.Bytes}",
    "${newTrack.UnitPrice}")`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("New Track is Created")
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const newTrack = req.body;
    
    const sql = `UPDATE tracks SET 
    Name = "${newTrack.Name}",
    AlbumId = "${newTrack.AlbumId}",
    MediaTypeId ="${newTrack.MediaTypeId}",
    GenreId = "${newTrack.GenreId}",
    Composer = "${newTrack.Composer}",
    Milliseconds =${newTrack.Milliseconds},
    Bytes = "${newTrack.Bytes}",
    UnitPrice = "${newTrack.UnitPrice}"
    WHERE TrackId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Selected Track is Updated")
    });
  },
  delete: (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM tracks WHERE TrackId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json("Selected Playlist is Deleted");
    });
   }
}

module.exports = controllers;
