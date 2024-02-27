const express = require('express')
const { uuidv4 } = require('uuidv4')

const { axiosLogin, axiosRegister } = require('../Api/ApiUsers')
// const { generateToken } = require('../Helpers/jwt')
const {generateToken} = require('../Helpers/jwt')
const { findUser, matchedPassword } = require('../Helpers/userMatch')
const {hashPassword , comparedPassword} = require('../Helpers/hashing')


exports.RegisterPage = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashedPass = await hashPassword(password)
        const result = await axiosRegister({username ,email , password : hashedPass , authorId : uuid()})
        if (!result) return res.status(400).json({ message: "Something went wrong" })
        res.redirect('/login')
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }


}

exports.LoginPage = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await findUser(email)
        if (!user) return res.send("Email is wrong")
        const checked = await matchedPassword(password, user.password)
        console.log("userpassword "+user.password);
        console.log("password body "+password);
        
        if (!checked) return res.send("Password is wrong")
        delete user.id
        delete user.password
        const token = await generateToken(user)
        res.cookie('token', token)
        res.redirect('/')
    }
    catch (err) {
        console.log(err);
    }
}
