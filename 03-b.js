let fs = require('fs');

let data = process.argv[3];

function x(err){
    if(err) throw err{
        console.log(' ERR: ' , err)
    }


    fs.writeFile(process.argv[2] , data, x );
}