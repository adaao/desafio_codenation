const fs = require('fs');
const request = require('axios');
const token = require('../../token.json');

const codenationAceleraDevJsonUrl = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=';
const fullUrl = codenationAceleraDevJsonUrl + token.token;


generateAnswerJsonFromHttpRequest(fullUrl);

function generateAnswerJsonFromHttpRequest(url){
   request.get(url)
      .then(response => {
         fs.writeFileSync('../answer.json', JSON.stringify(response.data), function(err){
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
}
