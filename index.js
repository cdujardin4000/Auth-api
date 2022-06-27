const express = require('express')
const app = express()
const authRoute = require('./routes/auth')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000

//to read an env variable from file
dotenv.config()
//connect the db
mongoose.connect(
    process.env.DB_CONNECT_URL,
    { useNewUrlParser: true },
    () => console.log('Connected to the DB')
)

app.use('/api/user', authRoute)
app.listen(port, () => console.log(`server is runing on port : ${port}`))