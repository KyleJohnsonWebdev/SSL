
"use strict"

//app.js
//load the things we need
var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");
var ejs = require("ejs");

var express = require("express");
var request = require("request");
var bodyParser = require("body-parser");
var app = express();
var ejs = require("ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const router = express.Router();

//set the view engine to ejs
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

//index page
router.get("/", function(req,res){

  res.render("index", {pagename:"Home"})
})

//about page
router.get("/about",function(req, res){

  res.render("about", {pagename:"About"})

})
//about page
router.get("/congrats",function(req, res){

  res.render("congrats", {pagename:"Congrats"})

})

//login when the url post information
router.post("/registration", function(req,res){
  console.log(req.body.email);
  console.log(req.body.password);
  var errors = [];
  var success = [];


  if(req.body.firstname ==""){
    errors.push("First Name is required.")
  }else{
    success.push("success")
  }
  if(req.body.lastname ==""){
    errors.push("Last Name is required.")
  }else{
    success.push("success")
  }
  if(req.body.address ==""){
    errors.push("Address is required.")
  }else{
    success.push("success")
  }
  if(req.body.city ==""){
    errors.push("City is required.")
  }else{
    success.push("success")
  }
  if(req.body.state ==""){
    errors.push("State is required.")
  }else{
    success.push("success")
  }
  if(req.body.zip ==""){
    errors.push("Zip is required.")
  }else{
    success.push("success")
  }
  if(!(/^\d{5}$|^\d{5}-\d{4}$/).test(req.body.zip)){
    errors.push("Zip is not valid.")
  }else{
    success.push("success")
  }
  if(req.body.age =="choose"){
    errors.push("Age is required.")
  }else{
    success.push("success")
  }

  if(req.body.email ==""){
    errors.push("Email is required.")
  }else{
    success.push("success")
  }
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(req.body.email)){
    errors.push("Email is not valid.")
  }else{
    success.push("success")
  }
  if(req.body.password ==""){
    errors.push("Password is required")
  }else{
    success.push("success")
  }
  if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(req.body.password)){
    errors.push("Password is not valid.")
  }else{
    success.push("success")
  }
  if(req.body.bio ==""){
    errors.push("Bio is required")
  }else{
    success.push("success")
  }
  if(!/^.{6,}$/.test(req.body.bio)){
    errors.push("Bio is not formatted correctly.")
  }else{
    success.push("success")
  }
console.log(success);
  if(success.length == 14){
    res.render("congrats", {pagename:"Congrats"})
  }else{
    res.render("index", {pagename:"Home", errors:errors})
  }





})

app.use(express.static("public"));
app.use("/",router);
var server = app.listen("8080");
