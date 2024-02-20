let fs = require('fs');

let data = process.argv[3];

function unlinkcallback(err){
    if(err){
        console.log(' ERR: ' , err)
    }

    else{
        console.log('File deleted.')
    }


    fs.writeFile(process.argv[2] , data, unlinkcallback);
}