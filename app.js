const fs = require('fs');
// from npm or yarn
const _ = require('lodash');
const yargs = require('yargs');

// custom modules
const notes = require('./notes');

// options
var titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

var bodyOptions = {
    describe: 'Content of note.',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Show titles of all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note.', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];

//console.log('command: ' + command);

//console.log('Process: ',  process.argv);
// console.log('Yargs: ', argv);

switch(command){
    case 'create':
    case 'add': var note = notes.createNote(argv.title, argv.body);
            if (note){
                console.log('Note created.');
                notes.printNote(note);
            } else
                console.log('Duplicate title. Note not saved.');
    break;
    case 'list':
    case 'show': notes.listNotes();
    break;
    case 'delete':
    case 'remove': var note = notes.deleteNote(argv.title);
            if (note)
                console.log('Note "' + argv.title + '" deleted.');
            else
                console.log('Note not found.');
    break;
    case 'read':
    case 'display': var note = notes.displayNote(argv.title);
        if (note) {
            notes.printNote(note);
        } else {
            console.log('No note found with that title.');
        }
    break;
    case 'update':
    case 'edit': var note = notes.updateNote(argv.title, argv.newTitle, argv.newBody);
        if (note){
            console.log('Note updated.');
        } else {
            console.log('No note found.');
        }
    break;
    default: console.log('command not recognized');
    break;
}

