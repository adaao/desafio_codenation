const fs = require('fs');
const getDecipheredCode = require('./codeDecipher');
const answerJsonFile = '../answer.json';
const sha1 = require ('sha1');
const updateJsonArchive = require('./generateJsonFile');

const answerDataUnparsed = fs.readFileSync(answerJsonFile, 'utf8');
const answerData = JSON.parse(answerDataUnparsed);

answerData.decifrado = getDecipheredCode();
answerData.resumo_criptografico = sha1(getDecipheredCode());

updateJsonArchive(answerJsonFile, answerData);
