var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("public"));
app.listen(8000, function(){
    console.log('Server running on port 8000...');
});


