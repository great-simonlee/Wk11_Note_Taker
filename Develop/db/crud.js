const fs = require("fs");
const util = require("util");

const uuidv1 = require("uuid/v1");

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.readFile);

class Crud {
    readNote() {
        return readNote(__dirname + "/db.json", "utf8");
    };

    writeNote(note) {
        return writeNote(__dirname + "/db.json", note)};

    parseNote() {
        return this.readNote().then((data) => {
            let parsedData = JSON.parse(data);
            console.log(parsedData);
            return parsedData;
        });
    };

    addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
          throw new Error("Note 'title' and 'text' cannot be blank");
        }

        // Funciton flow: call the note objects -> update the note object -> update the JSON file -> return the updated file
        // Define a new note with unduplicable id
        const newNote = { title, text, id: uuidv1() };

        return this.parseNote()
                .then((orgNotes) => [...orgNotes, newNote]) // Add a new note to the existing note array.
                .then((updatedNotes) => this.writeNote(updatedNotes)) // Update the JSON file with the write established above.
                .then(() => newNote); // Return the new note.
    }

    deleteNote(id) {
        // Function flow: call the note object -> update the note object except the notes with a specific id
        return this.parseNote() // call the note
                .then((notes) => notes.filter((note) => note.id !== id)) // update the notes without a note with a specific id.
                .then((filteredNotes) => this.writeNote(filteredNotes));
    }
};

module.exports = new Crud ();