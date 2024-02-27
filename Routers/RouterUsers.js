const express = require('express')
const router = express.Router()
const {LoginPage , RegisterPage} = require('../Controllers/users')
const {avoidAuth} = require('../Middlewares/avoidAuth')


router.get('/register' , (req,res) => {
    res.render('register')
})
router.get('/login' , (req,res) => {
    res.render('login')
})
router.post('/register' , RegisterPage)
router.post('/login' , LoginPage)


module.exports = router