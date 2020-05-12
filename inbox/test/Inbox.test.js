const assert = require('assert');

const ganache = require('ganache-cli');

const Web3 = require('web3'); //constructor function

//instance of web3
const web3 = new Web3(ganache.provider());