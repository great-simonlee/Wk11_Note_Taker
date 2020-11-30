const crud = require("../db/crud");
const router = require("express").Router();

router.get("/notes", function(req, res) {
    
    crud
    .parseNote() // call the note object
    // .then((data) => console.log(data))
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));

})

router.post("/notes", function(req, res) {

    crud
    .addNote(req.body) // add a note
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));

})

router.delete("/notes/:id", (req, res) => {

    crud
    .deleteNote(req.params.id) // delete a note
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));

  });

module.exports = router;