var express = require('express');
var bodyparser = require('body-parser');
var router = require('./routes/userRoutes');


var app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.use('/', router)
const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("server is running on =>" + port);
    }
})
