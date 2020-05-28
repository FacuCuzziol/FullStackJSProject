
const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//create server

const app = express();

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin,callback) =>{
    //console.log(origin);
    const existe = whitelist.some( dominio => dominio === origin);
    if (existe) {
      callback(null,true)
    }else{
      callback(new Error('No permitido por Cors'))
    }
  }
}




//enable cors

//app.use(cors(corsOptions));
app.use(cors());

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
//este es un comentario
// port and start server

app.listen(4000, ()=>{
  console.log('servidor funcionando');  
})