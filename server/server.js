require('dotenv').config({path: "./config.env"}); 
const express = require('express');

const app = express();

//get data from request body
app.use(express.json());

//catch request and check if its to api/auth or something then it will be redirected auth route
app.use('/api/auth' , require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port  ${PORT}`))