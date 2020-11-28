const fs = require("fs");

const util = require("util");

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.readFile);

class Crud {
    readNote() {
        return readNote(__dirname + "/db.json", "utf8");
    };

    write(note) {
        return writeNote(__dirname + "/db.json", JSON.stringify(note))};

    parseNote() {
        return this.readNote().then((data) => {
            console.log(JSON.parse(data));
        });
    }

    addNote() {
        const { title, text } = newNote;

        
        // const { title, text } = note;

        // if (!title || !text) {
        //   throw new Error("Note 'title' and 'text' cannot be blank");
        // }
    
        // // Add a unique id to the note using uuid package
        // const newNote = { title, text, id: uuidv1() };
    
        // // Get all notes, add the new note, write all the updated notes, return the newNote
        // return this.getNotes()
        //   .then((notes) => [...notes, newNote])
        //   .then((updatedNotes) => this.write(updatedNotes))
        //   .then(() => newNote);
    }

    deleteNote() {

    }
};

module.exports = new Crud ();