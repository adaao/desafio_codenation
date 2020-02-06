const fs = require('fs');

module.exports = function (archiveName, jsonData) {
   fs.writeFileSync(archiveName, JSON.stringify(jsonData), function(err){
      if (err) {
         console.log(err.message);
      }else{
         console.log('o arquivo ' + archiveName + ' foi criado.');
      }
   });
}