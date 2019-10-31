var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
var apiRouter = require('./api/index');
var mongoose=require('mongoose');

var db = mongo.connect("mongodb://localhost:27017/discuss",{ 
  useNewUrlParser:true,
  useUnifiedTopology: true 
});  
    
var app = express()  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', '*');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });
  
app.use("/api",apiRouter);
app.listen(8080, function (){ 
 console.log('Example app listening on port 8080!')  
})  