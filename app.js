const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route');
app.use('/', appRoute);
app.use('/images', express.static(path.join(__dirname,'images')));

app.listen(8000, ()=>{
    console.log('Server Berjalan di Port : 8000');
});