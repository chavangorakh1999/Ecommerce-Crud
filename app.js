
require('dotenv').config()
const express=require('express');
require('./mongoconnect');
const Wishlist = require('./wishlist/wishlist');
const Item =require('./Items/Items');

const app= express();

app.use(express.json());

app.use('/wishlist',Wishlist);
app.use('/items',Item);

app.get('/',(req,res)=>{
    console.log("Welcome Home!");
    res.status(200).send('Hello');
});


module.exports = app;