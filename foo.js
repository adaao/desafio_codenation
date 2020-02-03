const { numero_casas, cifrado } = require('./answer.json');

console.log(numero_casas);
console.log(cifrado);

const reverseAlphabet = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

function isInAlphabet(character){
   if (reverseAlphabet.includes(character)){
      return true;
   }else{
      return false;
   }
}

console.log(isInAlphabet('.'));

function codeDecipher(cipher, housesNumber){
   const decipheredCode = '';
   for(var i = 0; i < cipher.lenght; i++){

   }
}
