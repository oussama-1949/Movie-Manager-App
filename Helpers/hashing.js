const bcrypt = require('bcryptjs')

exports.hashPassword = async(password) => {
        return await bcrypt.hash(password , 10)

}  

exports.comparedPassword = async (password , hashedpassword) => {
    return await bcrypt.compare(password , hashedpassword)
}

