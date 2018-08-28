const fs = require('fs');

var fetchNotes = () => {
try {
        var allNotesString = fs.readFileSync('notes-data.json', {flag:'a+'});
        return JSON.parse(allNotesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (allNotes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(allNotes));
};

var addNote = (title, body) => {
    var note = {
        title: title,
        body: body
    };
    
    var allNotes = fetchNotes();    
    
    var dupeNotes = allNotes.filter( (note) => {
        return note.title === title;
    });
    
    if (dupeNotes.length == 0){
        // add the note to the array in memory
        allNotes.push(note);
        saveNotes(allNotes);
        return note;
    }
};

var listNotes = () => {
    var allNotes = fetchNotes();

    var listAllNotes = allNotes.forEach( (note, i) => {
        console.log(i+1 + ') ' + note.title);
        console.log('   ' + note.body);
    });

    return listAllNotes;
}

var readNote = (title) => {
    var allNotes = fetchNotes();
    
    var noteToRead = allNotes.filter( (note) => {
        return note.title == title;
    });

    return noteToRead[0];
};

var deleteNote = (title) => {
    var allNotes = fetchNotes();

    var notesToKeep = allNotes.filter( (note) => {
        return note.title != title;
    });
    var originalLength = allNotes.length;
    var newLength = notesToKeep.length;

    if (newLength < originalLength){
        saveNotes(notesToKeep);
        return title;
    } else
        return undefined;
}

function remove(array, element){
    const index = array.indexOf(element);
    array.splice(index, 1);
}

module.exports = {
    addNote,
    listNotes,
    readNote,
    deleteNote
};