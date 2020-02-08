const request = require('axios');
const token = require('../../token.json');
const generateJsonFile = require('./generateJsonFile');

const codenationAceleraDevJsonUrl = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=';
const fullUrl = codenationAceleraDevJsonUrl + token.token;
const answerArchive = '../answer.json';

generateAnswerJsonFromHttpRequest(fullUrl);

function generateAnswerJsonFromHttpRequest(url){
   request.get(url)
      .then(response => {
         generateJsonFile(answerArchive, response.data);
      })
      .catch(error => {
         console.log(error);
      });
}
