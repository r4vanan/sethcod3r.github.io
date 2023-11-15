'use strict';

const { spawn } = require( 'child_process' );
// NOTE: Windows Users, this command appears to be differ for a few users.
// You can think of this as using Node to execute things in your Command Prompt.
// If `cmd` works there, it should work here.
// If you have an issue, try `dir`:
// const dir = spawn( 'dir', [ '.' ] );
const dir = spawn( 'cmd', [ '/c', 'dir' ] );

dir.stdout.on( 'data', ( data ) => console.log( `stdout: ${ data }` ) );
dir.stderr.on( 'data', ( data ) => console.log( `stderr: ${ data }` ) );
dir.on( 'close', ( code ) => console.log( `child process exited with code ${code}` )
