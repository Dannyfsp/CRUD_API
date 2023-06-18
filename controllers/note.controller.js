const NotePad = require("../models/note.model");

const createNote = async (req, res) => {
  const topic = req.body.topic;
  const todo = req.body.todo;

  try {
    // input validation - check if the client enters topic and todo
    if (!topic || typeof topic !== "string") {
      return res
        .status(400)
        .json({ message: "topic is required and it has to be a string" });
    }

    if (!todo || typeof todo !== "string") {
      return res
        .status(400)
        .json({ message: "todo is required and it has to be a string" });
    }

    // save to the database
    const note = new NotePad({
      topic: topic,
      todo: todo,
      date: new Date(),
    });

    await note.save();
    // const note = await NotePad.create({
    //   topic: topic,
    //   todo: todo,
    //   date: new Date(),
    // })

    return res
      .status(201)
      .json({ message: "data saved successful", data: note });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getAllNotes = async (_, res) => {
  try {
    const notes = await NotePad.find();

    return res
      .status(200)
      .json({ message: "data retrieved successfully", data: notes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const topic = req.body.topic;

  try {
    // const newNote = await NotePad.findByIdAndUpdate(id, {topic: topic}, {new: true});

    // find note by id
    const note = await NotePad.findById(id);

    // if it can't find the note
    if (!note) {
      return res.status(400).json({ message: `${id} does not exist` });
    }

    // update the note
    note.topic = topic;

    // save the note
    await note.save();

    return res
      .status(200)
      .json({ message: `${id} note updated successfully`, note: note });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: `${id} does not exist` });
    }
    return res.status(500).json({ message: error });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    await NotePad.findByIdAndDelete(id);

    return res.status(200).json({ message: `${id} item deleted successful` });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: `${id} does not exist` });
    }
    return res.status(500).json({ message: error.message });
  }
};

const getNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await NotePad.findById(id);

    if (!note) {
      return res.status(400).json({ message: "cannot be found" });
    }

    return res.status(200).json({ message: note });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: `${id} does not exist` });
    }
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  updateNote,
  deleteNote,
  getNote,
};
