const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Notes = require("../models/Notes");

// Route to get all notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


// Route to add a note
router.post('/addnote', fetchuser,[
    body('title', 'Enter the title').isLength({ min: 3 }),
    body('description', 'Enter description of the project').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Error checking
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Creating and saving the note
        const note = new Notes({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// Route to update a note, login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Create newNote
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        // Update and return the updated note
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



// Route to delete a note, login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delted 
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not found");
        }
        //allow delete if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not allowed");
        }

        // Update and return the updated note
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({"Suucess":"Note has been deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});
module.exports = router;
