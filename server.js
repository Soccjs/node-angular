var express = require('express');
var bodyParser = require('body-parser')

var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//set content type
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


//set directory
app.use(express.static(__dirname));
app.use('/js', express.static(__dirname + '/js'));
app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/css', express.static(__dirname + '/css'));



app.all('/', function (req, res) {
  res.sendFile(__dirname+'/src/scripts/main/main.html') /* <= Where my ng-view is located */
  console.log("load main file!!")
})
// app.get('/api/login', function(req, res) {
// 	console.log("login")
//     res.send('hi');
// });

app.listen(8000); //the port you want to use