let fs = require('fs');

let data = process.argv[3];

function unlinkcallback(err){

    if(err){

        if(err.cod === 'EPERM'){

            fs.rmdir(process.argv[2],callback)
            
        }
        else{
            console.log('ERR:' , err)
        }

    }

  

    else{
        console.log("File DELETED.")

    }


    fs.writeFile(process.argv[2] , data, unlinkcallback);
}