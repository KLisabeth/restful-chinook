const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM playlists`;

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
    const sql =`SELECT * FROM playlists WHERE PlaylistId = ${id}`;
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
    const newPlaylist = req.body;
    const sql = `INSERT INTO playlists (Name)
    VALUES("${newPlaylist.Name}")`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("New Playlist is Created")
    });
  },
  update: (req, res) => {
    // read row data from body
    const id = req.params.id;
    const newPlaylist = req.body;
    
    const sql = `UPDATE playlists SET Name = "${newPlaylist.Name}"
    WHERE PlaylistId = ${id}`;
    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json("Selected Playlist is Updated")
    });
  },
  delete: (req, res) => { 
    const id = req.params.id;
    const sql = `DELETE FROM playlists WHERE PlaylistId = ${id}`;
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
