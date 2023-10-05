require('dotenv').config()
const blogRoutes = require('./routes/blogRoutes')
const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')

const app = express()

//midddleware
app.use(express.json())
app.use(cors());
app.use('/blog',blogRoutes)


//connecntiing to db
mongoose.connect(process.env.MONGO_URL)
 .then(() => {
    app.listen(process.env.PORT, ()=> {
        console.log("listening on port 4000")
    })
 })
 .catch((error)=>{
    console.log(error)
 })
