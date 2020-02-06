/*
As explained in documentation (https://github.com/request/request#multipartform-data-multipart-form-uploads) 
form multipart/form-data request is using 
form-data library. So you need to supply formData option 
instead of form option.
*/
const options = {
    method: "POST",
    url: "https://api.LINK.com/file",
    port: 443,
    headers: {
        "Authorization": "Basic " + auth,
        "Content-Type": "multipart/form-data"
    },
    formData : {
        "image" : fs.createReadStream("./images/scr1.png")
    }
};

request(options, function (err, res, body) {
    if(err) console.log(err);
    console.log(body);
});