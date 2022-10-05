//INVOCAMOS A EXPRESS
const express = require('express');
const app= express();

//SETEO URLENCODED PARA AGARRAR LOS DATOS DE FORMULARIO 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//DIRECCIONO A LA CARPETA PAGINA
app.use('/resources', express.static('/PAGINA'));
app.use('/resources', express.static(__dirname + ('/PAGINA')));

//ESTABEZCO LA PLANTILLA EJS
app.set('view engine', 'ejs');

//INVOCO A BCRYPTJS
const bcryptjs = require('bcryptjs');

//VARIABLE DE SESION
const session =  require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//INVOCO LA CONEXION DE BD
const connection = require('./database/db');

//ESTABLEZCO TODAS LAS RUTAS
app.get('/', (req, res)=>{
    res.render('login');
})

app.get('/registro', (req, res)=>{
    res.render('registro');
})


app.listen(5000, (req, res)=>{
    console.log('SERVER CORRIENDO EN http://localhost:5000');
})