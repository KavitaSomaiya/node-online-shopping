
var fs = require('fs')
var http = require('http')
var bodyParser = require('body-parser')
var nStatic = require('node-static')
var path = require("path")
var express = require('express')

var app = express()

app.post('/add', function (req, res) {
    console.log(req)
    var imgUrl = req.body.imgUrl
    var name = req.body.name
    var price = req.body.price
    var retailPrice = req.body.retailPrice
    var discount = req.body.discount
    var dataNumber = req.body.dataNumber
    var obj = {
        data : [{
            imgUrl,
            name,
            price,
            retailPrice,
            discount,
            dataNumber
        }]
    }
    var ObjString = JSON.stringify(obj) 
    
    fs.writeFile('product.json', ObjString, 'utf8', function (err) {
        if (err) {
            console.log('An error occured while writing JSON Object to File."')
            return console.log(err)
        }
        console.log('JSON file has been saved.')
    })
})

// var fileServer = new nStatic.Server('./public')

app.use(express.static('./public'))
app.use(bodyParser.json())
app.engine('html', require('ejs').renderFile)

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'), function (err, html) {
        if (err) {
            throw err
        }
        http.createServer(function (req, res) {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(html)
            res.end()
        })
    })
})
app.listen(900)
console.log("Client app running at 900")


// fs.readFile('./public/index.html', function (err, html) {
    //     if (err) {
    //         throw err; 
    //     }       
    //     http.createServer(function(request, response) {  
    //         response.writeHeader(200, {"Content-Type": "text/html"}) 
    //         response.write(html)
    //         response.end()
    //     }).listen(900)
    //     console.log('client app listening at 900')

// var express = require("express");
// var app     = express();
// var path    = require("path");


// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
// });
// app.listen(3000);
// console.log("Running at Port 3000");

// ------------------------------------------------------------------------------------------------

// var fs = require('fs')
// var http = require('http')

// app.use(express.static('./Client/public'))
// app.use(bodyParser.json())
// app.engine('html', require('ejs').renderFile)

// fs.readFile('./public/index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"}) 
//         response.write(html)
//         response.end()
//     }).listen(900)
//     console.log('client app listening at 900')
// })


// -------------------------------------------------------------------

// http.createServer(function (req, res) {
//     fileServer.serve(req, res)
// }).listen(900)
// console.log('Client app running at 900')