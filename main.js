const token = require('../token.json');
const request = require('axios');
const fs = require('fs');

const codenationAceleraDevJsonUrl = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=';

request.get(codenationAceleraDevJsonUrl + token.token)
   .then(response => {
      fs.writeFile('answer.json', JSON.stringify(response.data), function(err){
         if (err) {
            console.log(err.message);
         }else{
            console.log(response.data);
            console.log('o arquivo foi criado');
         }
      });
   })
   .catch(error => {
      console.log(error);
   });
