const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')


mongoose.connect('mongodb://localhost/ecommerce',{ useUnifiedTopology: true, 
useNewUrlParser: true },() => console.log('Connected to mongodb'))

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use('/api',require('./routes/api'))


app.get('/',(req,res) => res.send('Hello get'))

app.listen(5000,() => console.log('Listening on port 5000...'))