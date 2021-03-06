require('dotenv').config()
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require("body-parser");
var routes = require("./routes"); //require the whole folder will look for an index file
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function() {
    console.log("Website is now running on http://localhost:" + PORT);
});