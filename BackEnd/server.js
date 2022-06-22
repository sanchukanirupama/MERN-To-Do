require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./Routes/TodoRoute')

const app = express()
app.use(express.json())
app.use(cors())


const dburi = 'mongodb+srv://sanchuka:sanchuka@cluster0.eorew.mongodb.net/TodoList?retryWrites=true&w=majority'; //should move to .env

mongoose.connect(dburi)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.use(routes)
