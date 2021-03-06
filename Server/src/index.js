require('dotenv').config({ path: './.env' });
let express = require('express');
let routesConfigurations = require('./mainRoutes');

let app = express();

// Body-parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Default headers to enbale cors for develop enviroment
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server running on port: " + port);
})

// Configure routing
app.use('/api', routesConfigurations);
app.get('/api', (req, res) => res.send('Welcome to Express'));
let mongoose = require('mongoose');

// DB connection
const dbPath = `mongodb://${process.env.DB_HOST}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
  console.log('connected');
}, error => {
  console.log(error, 'error will connecting to the DB');
})

