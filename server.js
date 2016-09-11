'use strict';
var app = require('./app')

//Setting up local server
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), function() {
    console.log("Server listening on port", app.get('port'));
});
