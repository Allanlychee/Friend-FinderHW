//Dependencies
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

//Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/app/public')))

//Router
require(path.join(__dirname, "/app/routing/apiRoutes"))(app)
require(path.join(__dirname, "/app/routing/htmlRoutes"))(app)

var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT)
})
