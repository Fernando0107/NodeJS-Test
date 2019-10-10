var fs = require('fs');
var rs = fs.createReadStream('./demo_url.js');
rs.on('open', function () {
    console.log('The file is open');
});