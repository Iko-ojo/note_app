const notes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string'
        }
    } ,   
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'list all the notes',
    handler() {
       notes.listNotes();
    }
})

// Create read Command
yargs.command({
    command: 'read',
    describe: 'read a note',
    describe: {
        title: {
            describe: 'Note title ',
            demandOption: true,
            type: 'string' 
        }
    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

// add,remove,read, list

yargs.parse(); 