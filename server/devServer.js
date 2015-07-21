var port = 8000,
    express = require('express'),
    app = express();
app.use('/', express.static('../app/'));
app.listen(port);
console.log('Now serving http://localhost:'+port+'/index.html');
