let fs = require('fs');

let data = process.argv[3];

function callback(err){

    if(err){
        console.log("ERROR : ", err)
    }

    else{
        console.log("copy Succsesfull !")
    }


    fs.writeFile(process.argv[2] , process.argv[3], callback);
}