const express = require('express');
const db = require('./config/mongoose')
const port = 8003;
const path = require('path');
const { urlencoded } = require('express');
const Student = require('./module/student')
const app =express();
const fs =  require('fs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/uplods', express.static(path.join(__dirname,'uplods')));
app.use(express.urlencoded());


app.use("/",require("./routes"));

app.use("/post",require("./routes/post"));

app.listen(port,function(err){
    if(err){
        console.log("Server not connected");
    }
    console.log("server connect");
});