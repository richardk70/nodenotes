const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes2');

const argv = yargs.argv;
const command = process.argv[2];

// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

if (command == 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if (typeof note === 'undefined')
        console.log('Note already exists.');
    else
        console.log(note);

} else if (command == 'list') {
    notes.listNotes();

} else if (command == 'delete') {
    var note = notes.deleteNote(argv.title);
    if (typeof note === 'undefined')
        console.log('No note with that name.');
    else
        console.log(`${note.title} deleted.`);

} else if (command == 'read') {
    var note = notes.readNote(argv.title);
    if (typeof note === 'undefined')
        console.log('No note with that name.');
    else
        console.log(note);

} else {
    console.log('command not recognized');
}