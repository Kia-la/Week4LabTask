//Server

let express = require('express');
let app=express();
let db=[];
let ejs = require("ejs");
let bodyParser = require('body-parser');


let viewsPath = __dirname + "/views/";

app.use(express.static('public'));


app.use(
    bodyParser.urlencoded({
        extended:false
    })
)


app.engine("html",require('ejs').renderFile);
app.set("view engine","html");

app.use(express.static("public"));

/* 
          GET Requests
  */


app.get('/', function(req,res){
    let fileName = viewsPath + "index.html";
    res.sendFile(fileName);
})



app.get('/addnewtask',function(req,res){
    let fileName = viewsPath + "addNewTask.html";
    //res.sendFile(__dirname + "/addcustomer.html");
    res.sendFile(fileName);
})



app.get('/listalltasks', function(req,res){
    res.render("Listalltasks",{ data : db });
});

// POST Requests

app.post('/data',function(req,res){
console.log(req.body);
db.push(req.body);

res.render("Listalltasks",{ data : db });
});


app.listen(8080);
console.log("Listening on port 8080");
