var express=require('express');
var app=express();
var fs=require("fs");

var user={
    "user 4":{
        "name":"mohit",
        "password":"password4",
        "profession":"teacher",
        "id":4
    }
}

var id=2;

app.get('/listUsers',function(req,res){
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        console.log(data);
        res.end(data);
    });
})

app.post('/addUser',function(req,res){
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        data=JSON.parse(data);
        data["user 4"]=user["user 4"];
        console.log(data);
        res.end(JSON.stringify(data));

    });
})

app.get('/:id',function(req,res){
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        var users=JSON.parse(data);
        var user=users["user "+req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));

    });
})

app.delete('/deleteUser',function(req,res){
    fs.readFile(__dirname+"/"+"users.json",'utf8',function(err,data){
        data=JSON.parse(data);
        delete data["user "+3];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})


var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http: //%s:%s",host,port)
})

