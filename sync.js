'use strict';

const { spawnSync } = require( 'child_process' );
const ls = spawnSync( 'ls', [ '-lh', '/usr' ] );

console.log( `stderr: ${ ls.stderr.toString() }` );
console.log( `stdout: ${ ls.stdout.toString() }` );
