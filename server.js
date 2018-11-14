var express =  require('express');
var mongoose = require('mongoose')
var bodyparser = require('body-parser');

mongoose.connect('mongodb://localhost/Ventas',function(err){
    if (err)
    {
        console.log('Conexion failed');
    }
    else
    {
        console.log('Conexion successful');
    }
});