const {verifyToken} = require('../Helpers/jwt')


exports.avoidAuth = (req,res,next) => {
    const token = req.cookies.token || null
    if(!token) next()
    const verify = verifyToken(token)
if(!verify) next()
return res.status(302).redirect('/')
}