var fs = require('fs');

fs.writeFile('file1.txt','Hello from filesystemwrite.js!!!',function(err){
    if(err) throw err;
    console.log('Saved!');
});