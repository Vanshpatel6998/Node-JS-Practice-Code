var fs = require('fs');

fs.rename('file1.txt','file2.txt',function(err){
    if(err) throw err;
    console.log('File Renamed!');
});