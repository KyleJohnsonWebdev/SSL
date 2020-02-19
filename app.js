var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

http.createServer(function (req, res){
  var parsed = url.parse(req.url);
  var filename = path.parse(parsed.pathname);

  var filen = "";
  if(filename.name == ""){
    filen = "index";
  }else{
    filen = filename.name;
  }


  fs.readFile(filen + ".html", function(err,data){



    res.writeHead(200);
    res.write("<script> var highlighted = 'magenta';var one = 'test';var two = 'index';var three = 'about';</script>")

    res.end(data);
  })

}).listen("8080")
