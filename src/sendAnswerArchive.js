const fs = require('fs');
const axios = require('axios');
var FormData = require('form-data');
const generateResponseArchive = require('./generateJsonFile');
const token = require('../../token.json');
const request = require('request');

const answerArchive = '../answer.json';
var form = new FormData();
//url for tests
const url = 'https://ene5rblrpa5hp.x.pipedream.net';

const url_ = 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=' + token.token;
console.log(url_);

form.append('answer', fs.createReadStream(answerArchive));


const options = {
    method: "POST",
    url: url_,
    headers: {
        "Content-Type": "multipart/form-data"
    },
    formData : {
        'answer': fs.createReadStream(answerArchive)
    }
};

request(options, function (err, res, body) {
    if(err) console.log(err);
    console.log(body);
    fs.writeFileSync('../postResponse.json', body, function(err){
        if (err) {
           console.log(err.message);
        }else{
           console.log('o arquivo ' + archiveName + ' foi criado.');
        }
    })
});

/*
const config = { 
    headers: { 
        'Content-Type': 'multpart/form-data',
        'Enctype': 'multpart/form-data'
    } 
};

axios.post(url_, form, config)
    .then(response => {
        console.log(response)
        
        //pode apagar daqui...
        fs.writeFileSync('../postResponse.json', JSON.stringify(response.response.data), function(err){
            if (err) {
               console.log(err.message);
            }else{
               console.log('o arquivo ' + archiveName + ' foi criado.');
            }
        })
        //até aqui!
        
    })
    .catch(errors => console.log(errors));
*/
