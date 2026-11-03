const path = require('path');
// 2. Load the .env file using an absolute path relative to index.js
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
//require('dotenv').config()

const app = express()
PORT = process.env.PORT
const conn = require('./conn')
app.use(express.json())
app.use(cors())

const tripRoutes = require('./routes/trip.routes')

app.use('/trip', tripRoutes) // http://localhost:3001/trip --> POST/GET/GET by ID

app.get('/hello', (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})