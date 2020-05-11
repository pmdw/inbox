// import standard modules to read the .sol file
const path = require('path'); //path info 
const fs = require('fs'); //file system functions
const solc = require('solc'); // solidity compiler

// get the full path
const inboxPath  = path.resolve(__dirname, 'contracts', 'inbox.sol');

// read in the file
const source = fs.readFileSync(inboxPath,'utf8');

//just to see what happens when we compile the file
//console.log(solc.compile(source,1));

// compile the file and save it
module.exports = solc.compile(source,1).contracts[':Inbox'];
