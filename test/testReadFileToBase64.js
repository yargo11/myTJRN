const fs = require('fs');
const contents = fs.readFileSync('D:\\Users\\f204828\\Downloads\\ct12.pdf', {encoding: 'base64'});

fs.writeFile('resultado.txt', contents, function (err) {
    if (err) return console.log(err);
});