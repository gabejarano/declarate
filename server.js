const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/dist/declarese'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/declarese/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log("Listening")