const fs = require('fs');

var obj = {
    name: 'Richard'
};

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj); // string
// console.log(stringObj); // {"name": "Richard"}

// var personString = '{"name": "Richard", "age": 48}';

// // JSON.parse converts a string to an object
// var personObj = JSON.parse(personString);

// console.log(typeof personObj);
// console.log(personObj);

var originalNote = {
    title: 'This title',
    body: 'Body text here'
};

// convert to string
var orgNoteString = JSON.stringify(originalNote);
// write to a file
fs.writeFileSync('notes.json', orgNoteString);

// read from file
var retrievedNoteString = fs.readFileSync('notes.json');
// convert back to object
var retrievedNoteObj = JSON.parse(retrievedNoteString);

console.log(typeof retrievedNoteObj);
console.log(retrievedNoteObj.title);
