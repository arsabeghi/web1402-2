let fs = require('fs');

let data = process.argv[3];

function writeFileCallback(err){
    if(err){
        console.log(' ERR: ' , err)
    }

    else{
        console.log('File saved.')
    }


    fs.writeFile(process.argv[2] , data, writeFileCallback);
}