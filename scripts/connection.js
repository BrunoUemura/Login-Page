var express = require('express');
var mysql = require('mysql');
var app = express();

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loginDB'
});

conn.connect(function(error){
    if(!!error){
        console.log("Error");
    }else{
        console.log("Connected");
    }
});

app.get('/', function(req, resp){
    // about mysql
    conn.query("SELECT * FORM loginuser", function(error, rows, fields){
        if(!!error){
            console.log("Error in the query");
        }else{
            console.log("Successful query");
            console.log(rows);
        }
    });
});

app.listen(1337);