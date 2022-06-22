require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./Routes/TodoRoute')

const app = express()
app.use(express.json())
app.use(cors())


const dburi = process.env.dburi;

mongoose.connect(dburi)
    .then((result) => app.listen(process.env.PORT || 8080))
    .catch((err) => console.log(err));

app.use(routes)
