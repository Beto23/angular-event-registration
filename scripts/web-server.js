var express = require('express');
var path = require('path');
var app = express();

var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app')); // las funcion estatica sirve las paginas de un directorio dado sin procesarlos en absoluto
app.listen(8000);
console.log('Listening on port 8000');
