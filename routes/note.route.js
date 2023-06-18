const express = require("express");

const {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNote,
} = require("../controllers/note.controller");

const router = express.Router();

// post request - doc route
router.post("/create", createNote);

router.get("/notes", getAllNotes);

// UPDATE ENDPOINT
router.put("/note/:id", updateNote);

// DELETE ENDPOINT
router.delete("/note/:id", deleteNote);

// GET ENDPOINT FOR A SINGLE NOTE
router.get("/note/:id", getNote);

module.exports = router;
