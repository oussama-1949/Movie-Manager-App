const express = require('express')
const app = express()
const RouterMovies = require('./Routers/RouterMovies')
const RouterUsers = require('./Routers/RouterUsers')
const ejs = require('ejs')
require('dotenv').config()
const port = process.env.PORT || 8000
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set('view engine' , 'ejs')
app.use('/' , RouterMovies)
app.use('/' , RouterUsers)

app.use(express.static("public"))
app.use(express.static("uploads"))






app.listen(port , () => {
    console.log("The port is On " +port)
})