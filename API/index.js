
const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
//create server

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModifyL : false
});


//enable body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//enable routing

app.use('/',routes())

// port and start server

app.listen(4000, ()=>{
  console.log('servidor funcionando');  
})