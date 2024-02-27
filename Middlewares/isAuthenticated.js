const { verifyToken } = require('../Helpers/jwt')




exports.isAuthenticated = (req,res,next) => {
    const token = req.cookie.token;
    if (!token) return res.redirect('/login')
    const verify = verifyToken(token)
    if (!verify) return res.redirect('/login')
    req.user = verify

    next()
}