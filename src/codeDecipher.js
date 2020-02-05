const fs = require('fs');
const answerJsonFile = '../answer.json';
const answerData = fs.readFileSync(answerJsonFile, 'utf8');
const { cifrado, numero_casas } = JSON.parse(answerData);

console.log(codeDecipher(cifrado, numero_casas));

function codeDecipher(cipher, number_houses){
   
   var decipheredCode = '';
   const reverseAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
   
   for(var i = 0; i < cipher.length; i++){
      if(reverseAlphabet.includes(cipher[i])){
         decipheredCode += reverseAlphabet[
            (reverseAlphabet.indexOf(cipher[i]) + number_houses) % reverseAlphabet.length
         ];
      }else{
         decipheredCode += cipher[i];
      }
   }
   return decipheredCode;
}

